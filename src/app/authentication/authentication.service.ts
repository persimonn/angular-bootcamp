import { Injectable } from '@angular/core';
import { HelpersService } from '../shared/services/helpers.service';
import { HttpClient } from '@angular/common/http';
import { Response } from '../shared/DTO/response.model';
import { Registration } from '../shared/DTO/registration.model';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Login } from '../shared/DTO/login.model';

@Injectable({
  providedIn: 'root'
 })
 export class AuthenticationService {
 
  constructor(
              private http: HttpClient,
              private helpersService: HelpersService) { }
 
  register(payload: { username: string, email: string, password: string }) {
    const data = {
      username: payload.username,
      hashedPassword: this.helpersService.hashToSHA256(payload.password),
      email: payload.email
    };
    return this.http.post<Response<Registration>>(environment.postRegistrationUrl, data)
    .pipe(
      catchError(this.helpersService.handleError('registration'))
    );
  }

  login(payload: { email: string, password: string }) {
    const data = {
      hashedPassword: this.helpersService.hashToSHA256(payload.password),
      email: payload.email
    };
    return this.http.post<Response<Login>>(environment.postLoginUrl, data)
    .pipe(
      catchError(this.helpersService.handleError('login'))
    );
  }
 }
 