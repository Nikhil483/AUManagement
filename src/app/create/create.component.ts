import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CrudOppService } from '../../services/crud-opp.service';
import { ResultMessageService } from '../../services/result-message.service';
import Oppurtunity from '../Model/Oppurtunity.model';


+3
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  createParams: any;
  email: any;

  constructor(
    private formBuilder: FormBuilder,
    private crudOppService: CrudOppService,
    private resultService: ResultMessageService,
    private _Activatedroute: ActivatedRoute,
  ) {
    this.createForm = this.formBuilder.group({
      Jlocation: [''],
      skill: [''],
      HiringManager: [''],
      Department: [''],
      experience: [''],
      startDate: new Date(),
      endDate: new Date(),
      description: [''],
    });
  }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe((params) => {
      this.email = params.get('email');
    });
  }

  createForm: any;

  createOppurtunity() {
    this.createParams = {
      location: this.createForm.value.Jlocation,
      skill: this.createForm.value.skill,
      hiringManager: this.createForm.value.HiringManager,
      department: this.createForm.value.Department,
      experience: parseInt(this.createForm.value.experience),
      startDate: this.createForm.value.startDate,
      endDate: this.createForm.value.endDate,
      description: this.createForm.value.description,
      user:{ 
        email: this.email
      }
    };

    const keys = Object.keys(this.createParams);
  
    for(let i=0; i< keys.length;i++){
      if(this.createParams[keys[i]]===""){
        this.resultService.success(
          "Please all the fields"
        );
        return;
      }
    }

    console.log('Seach params ', this.createParams);
    this.crudOppService.addOppurtunity(this.createParams).subscribe((res) => {
      console.log(res);
      this.resultService.success(
        "Oppurtinity added ....!"
      );
    });
  }
}
