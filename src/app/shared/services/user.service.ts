import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HelpersService } from './helpers.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { User } from '../DTO/user.model';
import { Response } from '../DTO/response.model';
import { tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private token: string;
  private _userSource = new BehaviorSubject(null);
  public user: Observable<User>;
  constructor(private http: HttpClient,
             private helpersService: HelpersService,
              private router: Router) {
    this.user = this._userSource.asObservable();
  }

  getUserProfile(): Observable<Response<User>> {
    return this.http.get<Response<User>>(environment.getUserUrl)
      .pipe(
        tap((resp) => {
          this._userSource.next(resp.payload);
        }),
        catchError(this.helpersService.handleError('getUser')),
      );
  }
  setToken(token): void {
    localStorage.setItem('token', token);
    this.token = token;
  }
  logout(): void {
    this.removeToken();
    this._userSource.next(null);
    this.router.navigateByUrl('auth/login');
  } 
  removeToken() {
    localStorage.removeItem('token');
    this.token = null;
  }
  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }
}
