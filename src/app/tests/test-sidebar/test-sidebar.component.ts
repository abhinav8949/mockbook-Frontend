import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import * as $ from 'jquery';
import { LoginService } from 'src/app/services/login.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-test-sidebar',
  templateUrl: './test-sidebar.component.html',
  styleUrls: ['./test-sidebar.component.css']
})
export class TestSidebarComponent {

  isUserLogin:any

  constructor(private _category:CategoryService, private _login:LoginService, private _sidebar:SidebarService){}

  ngOnInit():void{
    this.isUserLogin=this._login.isLoggedIn()
  }

  ngAfterViewChecked(){
    this.sideBarJquery()
  }

  sideBarJquery(){
    $('.bttn').click(function () {
      $(this).toggleClass("click");
      $('.sidebar').toggleClass("show");
    });

    $('nav ul li').click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
    
    $('nav ul ul li').click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
    
  }

}
