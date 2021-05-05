import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-advacnced-search',
  templateUrl: './advacnced-search.component.html',
  styleUrls: ['./advacnced-search.component.scss']
})
export class AdvacncedSearchComponent implements OnInit {

  validatingForm: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormAvatarPassword: new FormControl('', Validators.required)
    });
  }

  get modalFormAvatarPassword() {
    return this.validatingForm.get('modalFormAvatarPassword');
  }

}
