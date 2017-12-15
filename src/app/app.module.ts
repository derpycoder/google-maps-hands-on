import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SmartAddressModule } from './smart-address/smart-address.module';

import { AppComponent } from './app.component';
import { GoogleMapsApiService } from './shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SmartAddressModule
  ],
  providers: [GoogleMapsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
