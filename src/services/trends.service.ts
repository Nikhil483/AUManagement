import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendsService {

  private apiServerUrl = environment.BaseUrl;

  constructor(private http: HttpClient) { }

  public getSkillFrequency(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/getSkillFrequency`);
  }

  public getLocationFrequency(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/getLocationFrequency`);
  }

  public getManagerFrequency(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/getManagerFrequency`);
  }

  public getOppurnityByYear(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/getOppurnityByYear`);
  }
}
