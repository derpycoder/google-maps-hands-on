import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormArray } from "@angular/forms";

import { countries, states } from "../mock-data";

@Component({
  selector: "ak-manual-address",
  templateUrl: "./manual-address.component.html",
  styleUrls: ["./manual-address.component.css"]
})
export class ManualAddressComponent implements OnInit {
  @Input() addressFormGroup: FormGroup;

  countries = countries;
  states = states;

  get addresses(): FormArray {
    return this.addressFormGroup.get("addresses") as FormArray;
  }

  constructor() {}

  ngOnInit() {
    this.addressFormGroup.patchValue({
      name: this.addresses.at(0).value
    });

    this.addresses.at(0).valueChanges.subscribe(val => {
      this.addressFormGroup.patchValue({
        name: val
      });
    });
  }
}
