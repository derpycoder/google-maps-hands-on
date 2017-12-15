import { Component, Input, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

import { AddressTypes, AddressComponent, GeometricLocation } from '../data-models';
@Component({
  selector: 'ak-google-address',
  templateUrl: './google-address.component.html',
  styleUrls: ['./google-address.component.css']
})
export class GoogleAddressComponent implements OnInit {
  @Input() addressFormGroup: FormGroup;
  @Input() initialLocation: GeometricLocation;

  @ViewChild("search")
  searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          console.log(place);

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.disectAddressComponents(place.address_components);
          this.disectAddressHTML(place.adr_address);

          this.initialLocation.latitude = place.geometry.location.lat();
          this.initialLocation.longitude = place.geometry.location.lng();
          this.initialLocation.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.initialLocation.latitude = position.coords.latitude;
        this.initialLocation.longitude = position.coords.longitude;
        this.initialLocation.zoom = 12;
      });
    }
  }

  private disectAddressComponents(addressComponents: AddressComponent[]) {
    let payload: any = {
      'city': '',
      'state': '',
      'country': '',
      'pin': ''
    };
    addressComponents.forEach(component => {
      component.types.forEach(type => {
        switch (type) {
          case AddressTypes.CITY:
            payload.city = component.long_name;
            break;
          case AddressTypes.STATE:
            payload.state = component.long_name;
            break;
          case AddressTypes.COUNTRY:
            payload.country = component.short_name;
            break;
          case AddressTypes.PIN:
            payload.pin = component.long_name;
        }
      });
    });

    this.addressFormGroup.patchValue(payload);
  }

  private disectAddressHTML(address: string) {
    let payload = {}, x;

    address.match(/<span class="(.*?)(?=<\/span>)/g).forEach(addr => {
      x = addr.substring(13).split('">');
      payload[x[0]] = x[1];
    });

    this.addressFormGroup.patchValue({
      addresses: [`${payload['street-address']}, ${payload['extended-address']}`]
    });

    console.log(payload);
  }
}
