import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudOppService } from '../../services/crud-opp.service';
import { ResultMessageService } from '../../services/result-message.service';


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

  mindate = new Date()

  location : string;
  skil : string;
  hr : string;
  dept : string;
  exp  : number;
  sDate : string;
  eDate : string;
  desc: SVGStringList;


  constructor(
    private formBuilder: FormBuilder,
    private _Activatedroute: ActivatedRoute,
    private crudOppService: CrudOppService,
    private resultService: ResultMessageService
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

    if(this.editForm.value.Jlocation=== ""){
      this.location = this.currentOppurtunity.location
    } else {
      this.location = this.editForm.value.Jlocation
    }

    if(this.editForm.value.skill=== ""){
      this.skil = this.currentOppurtunity.skill
    } else {
      this.skil = this.editForm.value.skill
    }

    if(this.editForm.value.HiringManager=== ""){
      this.hr = this.currentOppurtunity.hiringManager
    } else {
      this.hr = this.editForm.value.HiringManger
    }

    if(this.editForm.value.Department=== ""){
      this.dept = this.currentOppurtunity.department
    } else {
      this.dept = this.editForm.value.Department
    }

    if(this.editForm.value.experience=== ""){
      this.exp = this.currentOppurtunity.experience
    } else {
      this.exp = this.editForm.value.experience
    }

    if(this.editForm.value.startDate=== ""){
      this.sDate = this.currentOppurtunity.startDate
    } else {
      this.sDate = this.editForm.value.startDate
    }

    if(this.editForm.value.endDate=== ""){
      this.eDate = this.currentOppurtunity.endDate
    } else {
      this.eDate = this.editForm.value.endDate
    }

    if(this.editForm.value.description=== ""){
      this.desc = this.currentOppurtunity.description
    } else {
      this.desc = this.editForm.value.description
    }

    this.editParams = {
      Jlocation: this.location,
      skill: this.skil,
      HiringManager: this.hr,
      Department: this.dept,
      experience: this.exp,
      startDate: this.sDate,
      endDate: this.eDate,
      description: this.desc,
      user:{ 
        email: this.email
      },
      oppId: this.id
    };

    console.log('Seach params ', this.editParams);
    this.crudOppService.updateOppurtunity(this.editParams).subscribe((res) => {
      console.log(res);
      this.resultService.success(
        "Oppurtunity edited succesfully"
      );
    });
  }
}
