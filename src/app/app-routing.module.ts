import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartAddressComponent } from './smart-address/components/smart-address.component';

const routes: Routes = [
  { path: '', component: SmartAddressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
