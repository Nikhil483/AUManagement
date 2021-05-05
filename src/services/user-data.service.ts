import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { EMPTY } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  user : any;

  constructor() { }

  setUser(usrObj) : Observable<any> {
    this.user = usrObj;
    return EMPTY; 
  }

  getUser() {
    return this.user;
  }
}
