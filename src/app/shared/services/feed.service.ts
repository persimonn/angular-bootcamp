import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelpersService } from './helpers.service';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { FeedItem } from '../DTO/feeditem.model';
import { Response } from '../../shared/DTO/response.model';
import { Observable } from 'rxjs';
import { UploadImage } from '../DTO/uploadimage.model';

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
  }

  getPost(id: string): Observable<Response<FeedItem>> { 
    return this.http.get<Response<FeedItem>>(environment.getPostUrl + id)
    .pipe(
      catchError(this.helpersService.handleError('getPost'))
    );
  }

  uploadImage(payload: FormData) {
    return this.http.post<Response<UploadImage>>(environment.uploadImageUrl, payload)
    .pipe(
      catchError(this.helpersService.handleError('uploadImage'))
    );
  }

  uploadPost(payload) {
    return this.http.post<Response<any>>(environment.uploadPostUrl, payload)
    .pipe(
      catchError(this.helpersService.handleError('uploadImage'))
    );
  }
}

