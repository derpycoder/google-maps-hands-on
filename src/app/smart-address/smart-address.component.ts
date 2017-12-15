import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { GeometricLocation } from './data-models';

enum AddressTabs { GOOGLE, MANUAL }

@Component({
  selector: 'ak-smart-address',
  templateUrl: './smart-address.component.html',
  styleUrls: ['./smart-address.component.css']
})
export class SmartAddressComponent implements OnInit {
  mAddressTabs = AddressTabs;
  selectedTab: AddressTabs = AddressTabs.GOOGLE;

  @Input() showMap = true;
  @Input() isUnified = true;
  @Input() addressFormGroup: FormGroup;
  @Input() initialLocation: GeometricLocation = {
    latitude: 39.8282,
    longitude: -98.5795,
    zoom: 4,
  };
  @Input() addressCount = 1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.setCurrentPosition();

    const addrArray = this.formBuilder.array([new FormControl()]);
    let i = 1;

    while (i < this.addressCount) {
      addrArray.push(new FormControl());
      i++;
    }

    this.addressFormGroup = this.formBuilder.group({
      'name': '',
      'addresses': addrArray,
      'city': '',
      'state': 'Telangana',
      'country': 'IN',
      'pin': ''
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.initialLocation.latitude = position.coords.latitude;
        this.initialLocation.longitude = position.coords.longitude;
        this.initialLocation.zoom = 12;
      });
    }
  }
}
