import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import baseUrl from '../data-type/helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router:Router) { }

// ---------------Backend---------------
  // Generete Token from spring-boot
  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/auth/login`, loginData);
  }

   // Current user which is logged in
   public getCurrentUser(){
    return this.http.get(`${baseUrl}/auth/current-user`)
  }

  // Login user: set token to localStorage
  public loginUser(token:any){
    localStorage.setItem("token", token);
    return true;
  }

  // isLogin: check user is logged in or not
  public isLoggedIn(){
    let tokenStr=localStorage.getItem("token")
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null){
      return false
    }else{
      return true;
    }
  }

  public getToken(){
    return localStorage.getItem('token')
  }

  // set user details to local storage
  public setUser(user:any){
    localStorage.setItem('user', JSON.stringify(user))
  }

  public logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    return true;
  }

  public getUser(){
    let userStr=localStorage.getItem('user')
    if(userStr!=null){
      return JSON.parse(userStr)
    }else{
      this.logout();
      return null
    }
  }

  public getUserRole(){
    let user=this.getUser()
    return user.authorities[0].authority;
  }

}
