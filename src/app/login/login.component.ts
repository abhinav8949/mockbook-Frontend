import { Component } from '@angular/core';
import { logIn } from '../data-type/test-data';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgToastService } from 'ng-angular-popup';
import { LoginService } from '../services/login.service';
import { NavbarService } from '../services/navbar.service';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import { data } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginData = {
    email: '',
    password: '',
  }

  constructor(private _login: LoginService, private _firebaseLogin: FirebaseAuthService
  ) { }

  ngOnInit(): void {

  }

  loginFormJavaMySQL() {
    this._login.generateToken(this.loginData).subscribe(
      (data: any) => {
        this.loginData.email = ''
        this.loginData.password = ''

        this._login.loginUser(data.token);

        this._login.getCurrentUser().subscribe(
          (user) => {
            this._login.setUser(user)
            if (this._login.getUserRole() == "ROLE_NORMAL") {
              Swal.fire("Welcome", 'we warm welcome you on mock-book', 'success')
              window.location.href = '/user-dashboard/'
            } else if (this._login.getUserRole() == 'ROLE_ADMIN') {
              Swal.fire("Admin-Dashboard", 'Hey admin how are you...?', 'success')
              window.location.href = '/admin-dashboard/'
            } else {
              this._login.logout()
            }
          })
      }, (err) => {
        this.loginData.email = ''
        this.loginData.password = ''
        Swal.fire("Credentials Invalid !!", 'You are not valid user...?', 'error')
      })
  }

}
