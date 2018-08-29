import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelpersService } from './helpers.service';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { FeedItem } from '../DTO/feeditem.model';
import { Response } from '../../shared/DTO/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private http: HttpClient,
    private helpersService: HelpersService) { }

   getFeed(): Observable<Response<FeedItem[]>> { 
    return this.http.get<Response<FeedItem[]>>(environment.getFeedUrl)
    .pipe(
      catchError(this.helpersService.handleError('getFeed'))
    );
}}
