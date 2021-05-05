import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editParams: {
    Jlocation: any;
    skill: any;
    HiringManager: any;
    Department: any;
    experience: any;
    startDate: any;
    endDate: any;
  };

  constructor(private formBuilder: FormBuilder) {
    this.editForm = this.formBuilder.group({
      Jlocation: [''],
      skill: [''],
      HiringManager: [''],
      Department: [''],
      experience: [''],
      startDate: new Date(),
      endDate: new Date(),
    });
  }

  ngOnInit(): void {
  }

  editForm: any;

  editOppurtunity() {
    this.editParams = {
      Jlocation: this.editForm.value.Jlocation,
      skill: this.editForm.value.skill,
      HiringManager: this.editForm.value.HiringManager,
      Department: this.editForm.value.Department,
      experience: this.editForm.value.experience,
      startDate: this.editForm.value.startDate,
      endDate: this.editForm.value.endDate,
    };

    console.log('Seach params ', this.editParams);
  }

}
