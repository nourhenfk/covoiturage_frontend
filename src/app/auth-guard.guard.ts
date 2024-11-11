import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './services/auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const allowedRole = route.data['allowedRole'];


    if (allowedRole === 'CONDUCTEUR' && this.authService.isConducteur()) {
      return true;
    } else if (allowedRole === 'PASSAGER' && this.authService.isPassager()) {
      return true;
    }

    console.log(allowedRole , this.authService.isConducteur(), this.authService.isPassager())
    return this.router.navigate(['/']);
}

}
