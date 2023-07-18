import { Component } from '@angular/core';
import { SignupService } from '../services/signup.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { UserRegistration } from '../data-type/user-data';
import { ConfirmedValidator } from '../data-type/confirm-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  UserRegistrationObj:UserRegistration=new UserRegistration();
  userData!:FormGroup
  passwordfieldTextType=false
  cnfPasswordfieldTextType=false

  constructor(private formBuilder:FormBuilder, private _signup:SignupService, private _router:Router
    ){}

  ngOnInit():void{
    this.userData=this.formBuilder.group({
      fname:['', [Validators.required]],
      lname:['', [Validators.required]],
      phone:['', [Validators.required]],
      email:['', [Validators.required]],
      password:['', [Validators.required]],
      cnfpassword:['', [Validators.required]]
    },
    {
      validator:ConfirmedValidator('password', 'cnfpassword')
    })
  }
  
  signupFormJavaMySQL(){
    this.UserRegistrationObj.fname=this.userData.value.fname
    this.UserRegistrationObj.lname=this.userData.value.lname
    this.UserRegistrationObj.phone=this.userData.value.phone
    this.UserRegistrationObj.email=this.userData.value.email
    this.UserRegistrationObj.password=this.userData.value.password
    this.UserRegistrationObj.cnfpassword=this.userData.value.cnfpassword
    
    // console.log(this.UserRegistrationObj);
    this._signup.createUser(this.UserRegistrationObj).subscribe((data)=>{
      console.log(data);
      Swal.fire("Registration successfully done.",'Wow!!! Email: '+this.userData.value.email+' and Password: '+this.userData.value.password+' ,now login with this credentials.','success')
      this.userData.reset()
      this._router.navigate(['login'])
    }, (err)=>{
      console.log(err);
      Swal.fire("Registration not done.",'This!!! Email: '+this.userData.value.email+' already registered.','error')
      this.userData.reset()
    })

  }

  showPassword() {
    this.passwordfieldTextType = !this.passwordfieldTextType;
  }

  showCnfPassword() {
    this.cnfPasswordfieldTextType = !this.cnfPasswordfieldTextType;
  }

}
