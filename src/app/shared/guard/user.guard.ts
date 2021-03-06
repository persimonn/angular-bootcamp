import { Injectable } from '@angular/core';
import { Route, Router, CanLoad } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

export class UserGuard implements CanLoad {

  constructor(private userService: UserService, 
              private router: Router) {
  }
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return Observable.create((observer: Observer<boolean>) => {
      this.userService.getUserProfile().subscribe(
        (response) => {
          this.router.navigate(['feed']);
          observer.next(false);
          observer.complete();
        },
        (error) => {
          observer.next(true);
          observer.complete(); 
        });
    });
  }
}
