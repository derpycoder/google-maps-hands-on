import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { environment } from '../../environments/environment';

import {
  SmartAddressComponent,
  GoogleAddressComponent,
  ManualAddressComponent
} from './';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: environment.google_maps_api_key,
      libraries: ["places"]
    }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SmartAddressComponent,
    GoogleAddressComponent,
    ManualAddressComponent
  ]
})
export class SmartAddressModule { }
