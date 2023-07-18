import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core'
import { LoginService } from '../services/login.service';

export const adminGuard: CanActivateFn = (route, state) => {

  const _login=inject(LoginService)
  const router=inject(Router)

  if(_login.isLoggedIn() && _login.getUserRole()=='ROLE_ADMIN'){
    return true
  }
  router.navigate(['login'])
  return false;

};
