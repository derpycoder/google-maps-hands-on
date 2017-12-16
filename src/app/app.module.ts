import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { SmartAddressModule } from "./smart-address/smart-address.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SmartAddressModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
