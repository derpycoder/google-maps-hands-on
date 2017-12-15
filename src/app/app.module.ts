import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app/app.component';
import { SmartAddressModule } from './smart-address/smart-address.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SmartAddressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
