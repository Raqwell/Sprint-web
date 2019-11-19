import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  endpoint = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.endpoint + 'users').pipe(
      map(this.extractData));
  }

  getAllSprints(): Observable<any> {
    return this.http.get(this.endpoint + 'sprints').pipe(
      map(this.extractData));
  }
}
