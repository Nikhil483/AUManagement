import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  createParams: {
    Jlocation: any;
    skill: any;
    HiringManager: any;
    Department: any;
    experience: any;
    startDate: any;
    endDate: any;
  };

  constructor(private formBuilder: FormBuilder) {
    this.createForm = this.formBuilder.group({
      Jlocation: [''],
      skill: [''],
      HiringManager: [''],
      Department: [''],
      experience: [''],
      startDate: new Date(),
      endDate: new Date(),
    });
  }

  ngOnInit(): void {}

  createForm: any;

  createOppurtunity() {
    this.createParams = {
      Jlocation: this.createForm.value.Jlocation,
      skill: this.createForm.value.skill,
      HiringManager: this.createForm.value.HiringManager,
      Department: this.createForm.value.Department,
      experience: this.createForm.value.experience,
      startDate: this.createForm.value.startDate,
      endDate: this.createForm.value.endDate,
    };

    console.log('Seach params ', this.createParams);
  }
}
