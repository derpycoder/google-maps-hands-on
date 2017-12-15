import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SmartAddressComponent,
  GoogleAddressComponent,
  ManualAddressComponent
} from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SmartAddressComponent,
    GoogleAddressComponent,
    ManualAddressComponent
  ]
})
export class SmartAddressModule { }
