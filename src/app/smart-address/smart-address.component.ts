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

  @Input() isUnified: boolean;
  @Input() addressFormGroup: FormGroup;
  @Input() initialLocation: GeometricLocation = {
    latitude: 39.8282,
    longitude: -98.5795,
    zoom: 4,
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.setCurrentPosition();

    this.addressFormGroup = this.formBuilder.group({
      'name': '',
      'addresses': this.formBuilder.array([new FormControl()]),
      'city': '',
      'state': 'Telangana',
      'country': 'IN',
      'pin': ''
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
}
