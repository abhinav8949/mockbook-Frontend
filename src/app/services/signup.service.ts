import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import baseUrl from '../data-type/helper';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  public createUser(data:any){
    return this.http.post(`${baseUrl}/auth/create`, data);
  }

}
