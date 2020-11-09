import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { RoutePath } from 'src/app/core/constants/route_paths';

@Injectable()
export class GuardService implements CanActivate {

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.currentUser)
      return true
    else {
      this.auth.redirectURL = state.url;
      this.router.navigate([RoutePath.login.toRedirect]);
      return false;
    }
  }
}
