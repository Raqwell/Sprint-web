import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
    profile:any;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.getUser();
   }

  endpoint = 'http://localhost:3000/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private getUser() {
    this.auth.userProfile$.subscribe(val => {
        this.profile = val;
    });
  }

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

  getAllSprintsByUser(): Observable<any> {
      return this.http.get(this.endpoint + 'sprints/' + this.profile.email).pipe(
          map(this.extractData));
  }
}
