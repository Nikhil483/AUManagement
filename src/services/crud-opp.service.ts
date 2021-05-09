import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Oppurtunity from '../app/Model/Oppurtunity.model';

@Injectable({
  providedIn: 'root'
})
export class CrudOppService {

  constructor(private http: HttpClient) { }

  private apiServerUrl = environment.BaseUrl;

  public getAllOppurtinities(): Observable<Oppurtunity[]> {
    return this.http.get<Oppurtunity[]>(`${this.apiServerUrl}/getAllOppurtunity`);
  }

  public addOppurtunity(oppurtunity: any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/addOppurtunity`,oppurtunity);
  }

  public getOppurtunity(id: number): Observable<any> {
    console.log("id",`${this.apiServerUrl}/getOppurtunity`,id)
    return this.http.get<any>(`${this.apiServerUrl}/getOppurtunity`,id);
  }

  public deleteOppurtunity(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/deleteOppurtunity`id);
  }

}
