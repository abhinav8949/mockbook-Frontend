import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import {inject} from '@angular/core';

export const normalGuard: CanActivateFn = (route, state) => {
  const _login=inject(LoginService);
  const router=inject(Router)
  
  if(_login.isLoggedIn() && _login.getUserRole()=='ROLE_NORMAL'){
    router.navigate(['user-dashboard'])
    return false;
  }else if(_login.isLoggedIn() && _login.getUserRole()=='ROLE_ADMIN'){
    router.navigate(['admin-dashboard'])
    return false;
  }
    return true
    
};
