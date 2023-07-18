import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import {inject} from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {

  const _login=inject(LoginService);
  const router=inject(Router)
  // if(!_login.isLoggedIn()){
  //   router.navigate(['login'])
  //   return false;
  // }
  // return true
  if(_login.isLoggedIn() && _login.getUserRole()=='ROLE_NORMAL'){
    return true
  }
  router.navigate(['login'])
  return false;
};




