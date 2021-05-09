import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { EMPTY } from 'rxjs'

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Token from '../app/Model/Token.model';
import User from '../app/Model/User.model'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  user : User;

  constructor(private http: HttpClient) {}

  private endPointUrl = environment.auth;
  public login(user: User): Observable<Token>{
    return this.http.post<Token>(`${this.endPointUrl}/login`, user);
  }

  setUser(usrObj) : Observable<any> {
    this.user = usrObj;
    return EMPTY; 
  }

  getUser() {
    return this.user;
  }

  
}
