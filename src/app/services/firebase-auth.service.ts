import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private _fireAuth:AngularFireAuth, private _router:Router) { }

  //login method
  login(email:string, password:string){
    this._fireAuth.signInWithEmailAndPassword(email, password).then(()=>{
      localStorage.setItem('token', 'true')
      this._router.navigate(['user-dashboard'])
    }, err=>{
      alert('something error in login')
      this._router.navigate(['/login'])
    })
  }

  // register method
  register(email:string, password:string){
    this._fireAuth.createUserWithEmailAndPassword(email, password).then(()=>{
      alert('Registration success')
      this._router.navigate(['/login'])
    }, err=>{
      alert('something wrong in registration')
      this._router.navigate([''])
    })
  }

  // signout
  logout(){
    this._fireAuth.signOut().then(()=>{
      localStorage.removeItem('token');
      this._router.navigate([''])
    }, err=>{
      alert(err)
    })
  }


}
