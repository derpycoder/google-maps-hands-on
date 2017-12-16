import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormArray } from "@angular/forms";

import { countries, states } from "../mock-data";

@Component({
  selector: "ak-manual-address",
  templateUrl: "./manual-address.component.html",
  styleUrls: ["./manual-address.component.css"]
})
export class ManualAddressComponent implements OnInit, OnDestroy {
  @Input() addressFormGroup: FormGroup;

  countries = countries;
  states = states;

  get addresses(): FormArray {
    return this.addressFormGroup.get("addresses") as FormArray;
  }

  constructor() {}

  ngOnInit() {
    this.syncValue(this.addresses.at(0).value);

    this.addresses.at(0).valueChanges.subscribe(val => {
      this.syncValue(val);
    });
  }

  ngOnDestroy() {
    this.syncValue(this.addresses.at(0).value);
  }

  syncValue(val) {
    this.addressFormGroup.patchValue({
      name: val
    });
  }
}
