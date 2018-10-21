import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {CustomerService} from './customer.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';

@Injectable()
export class NeedAuthGuard implements CanActivate {

  constructor(private customerService: CustomerService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const redirectUrl = 'http://localhost:3000/register';
    if (this.customerService.isLogged()) {
      console.log("Is logged!");
      return true;
    }

    console.log("No es logged!");

    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/login'], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );

    return false;
  }
}
