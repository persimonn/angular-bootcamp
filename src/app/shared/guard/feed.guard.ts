import { Injectable } from '@angular/core';
import { Route, Router, CanLoad } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

export class FeedGuard implements CanLoad {

  constructor(private userService: UserService, 
              private router: Router) {
  }
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return Observable.create((observer: Observer<boolean>) => {
      this.userService.getUserProfile().subscribe(
        (response) => {
          observer.next(true);
          observer.complete();
        },
        (error) => {
          this.router.navigate(['auth/login']);
          observer.next(false);
          observer.complete(); 
        });
    });
  }
}