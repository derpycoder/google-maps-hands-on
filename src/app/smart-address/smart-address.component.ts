import { Component, OnInit } from '@angular/core';

enum AddressTabs {GOOGLE, MANUAL}

@Component({
  selector: 'ak-smart-address',
  templateUrl: './smart-address.component.html',
  styleUrls: ['./smart-address.component.css']
})
export class SmartAddressComponent implements OnInit {
  mAddressTabs = AddressTabs;
  selectedTab: AddressTabs = AddressTabs.GOOGLE;

  constructor() { }

  ngOnInit() {
  }

}
