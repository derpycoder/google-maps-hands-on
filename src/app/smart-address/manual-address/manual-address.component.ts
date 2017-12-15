import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'ak-manual-address',
  templateUrl: './manual-address.component.html',
  styleUrls: ['./manual-address.component.css']
})
export class ManualAddressComponent implements OnInit {
  @Input() addressFormGroup: FormGroup;

  get addresses(): FormArray {
    return this.addressFormGroup.get('addresses') as FormArray;
  };

  constructor() { }

  ngOnInit() {
  }

}
