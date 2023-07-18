import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgToastService } from 'ng-angular-popup';
import { NavbarService } from '../services/navbar.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuType: any

  user = null
  isLoggedIn = false

  constructor(private _login: LoginService, private router: Router, private toaster: NgToastService, public _nav: NavbarService) { }

  ngOnInit(): void {
    this.menuTyping()
    this.isLoggedIn = this._login.isLoggedIn()
    this.user = this._login.getUser()
  }

  menuTyping() {
    this.router.events.subscribe((value: any) => {
      if (value.url) {
        if (this._login.getUser() && value.url.includes('user')) {
          this.menuType = 'user'
        } else if (this._login.getUser() && value.url.includes('admin')) {
          this.menuType = 'admin'
        } else {
          this.menuType = 'default'          
        }
      }
    })
  }

  logout(){
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Logout',
      title: 'Hey visit again...',
    }).then((result) => {
      if (result.isConfirmed) {
        this._login.logout()
        // this.router.navigate(['/'])
        this.toaster.success({ detail: "Success", summary: "Logout Success", duration: 5000 })
        window.location.reload()
      }
    })
  }

}
