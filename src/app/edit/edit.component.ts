import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudOppService } from '../../services/crud-opp.service';


import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  editParams: any;
  id: number;
  email : string;
  currentOppurtunity: any;

  constructor(
    private formBuilder: FormBuilder,
    private _Activatedroute: ActivatedRoute,
    private crudOppService: CrudOppService,
  ) {
    this.editForm = this.formBuilder.group({
      Jlocation: [''],
      skill: [''],
      HiringManager: [''],
      Department: [''],
      experience: [''],
      startDate: new Date(),
      endDate: new Date(),
      description:['']
    });


  }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'));
      this.email = params.get('email')
    });

    this.crudOppService.getOppurtunity(this.id).subscribe((res) => {
      console.log("edit",res);
      this.currentOppurtunity = res;
    });
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
      description: this.editForm.value.description,
      user:{ 
        email: this.email
      },
      oppId: this.id
    };

    console.log('Seach params ', this.editParams);
  }
}
