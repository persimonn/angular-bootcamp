import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router, CanLoad } from '@angular/router';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserGuard implements CanLoad {

  constructor(//private userService: UserService, 
              private router: Router) {
  }
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    // return Observable.create((observer: Observer<boolean>) => {
    //   this.userService.getUserProfile().subscribe(
    //     (response) => {
    //       //this.router.navigate(['auth']);
    //       observer.next(false);
    //       observer.complete();
    //     },
    //     (error) => {
    //       observer.next(true);
    //       observer.complete(); 
    //     });
    // });
    return true;
  }
}
