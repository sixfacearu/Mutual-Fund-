import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContractsService } from '../services/contracts.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioCheckGuard implements CanActivate {
  constructor(private wcs:ContractsService,private route:Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.wcs.PortfolioValidating().then(result => {
        console.log(result);
        
        if (!result){
          this.route.navigate(["portfolio-register"]);
          return false;
        }
        else
        {
          return true;
        }
      })
  }  }
  

