import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import {LoginComponent} from '../Pages/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  result:any;
  
  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
     this.result= localStorage.getItem("logged");
     if(this.result==="false"){
      this.result=this.router.navigateByUrl('/login')
     }else{
      return true;
     }
  }
  
}
