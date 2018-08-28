import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import * as crypto from 'crypto-js';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  handleError(operation = 'operation') {
    return (error: HttpErrorResponse) => {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      this.log(`${operation} failed: ${error.error.message}`);
      // return an observable with a user-facing error message
      return throwError(error);
    };
  }

  log(message: string) {
    console.log('Error: ' + message);
  }

  hashToSHA256(value) {
    return crypto.SHA256(value).toString();
  }
}
