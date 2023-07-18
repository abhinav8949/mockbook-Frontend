import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../data-type/helper';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  public sendEmailToTeam(data:any) {
    return this.http.post(`${baseUrl}/contact/email`, data, {responseType:'text'})
  }

  public sendEmailToUser(data:any) {
    console.log(data);
    
  }



}
