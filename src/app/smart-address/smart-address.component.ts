import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addressFormGroup = this.formBuilder.group({
      'name': '',
      'addresses': this.formBuilder.array([this.createAddress()]),
      'city': '',
      'state': '',
      'country': '',
      'pin': ''
    });
  }

  createAddress() {
    return this.formBuilder.group({
      'address': ''
    });
  }
}
