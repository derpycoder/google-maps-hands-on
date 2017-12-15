import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { GeometricLocation } from './';

enum AddressTabs { GOOGLE, MANUAL }

@Component({
  selector: 'ak-smart-address',
  templateUrl: './smart-address.component.html',
  styleUrls: ['./smart-address.component.css']
})
export class SmartAddressComponent implements OnInit {
  mAddressTabs = AddressTabs;
  selectedTab: AddressTabs = AddressTabs.GOOGLE;

  addressFormGroup: FormGroup;

  initialLocation: GeometricLocation = {
    latitude: 39.8282,
    longitude: -98.5795,
    zoom: 4,
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addressFormGroup = this.formBuilder.group({
      'name': '',
      'addresses': this.formBuilder.array([new FormControl()]),
      'city': '',
      'state': '',
      'country': '',
      'pin': ''
    });
  }
}
