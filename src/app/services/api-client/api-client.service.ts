import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Sprint } from 'src/app/models/sprint';

@Injectable({
    providedIn: 'root'
})
export class ApiClientService {
    profile: any;

    constructor(private http: HttpClient, private auth: AuthService) {
        this.getUser();
    }

    endpoint = 'http://localhost:3000/api/';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    private getUser() {
        this.auth.userProfile$.subscribe(val => {
            this.profile = val;
        });
    }

    private extractData(res: Response) {
        let body = res;
        return body || {};
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
        /* return this.http.get(this.endpoint + 'sprints/' + this.profile.email).pipe(
            map(this.extractData)); */

        return this.http.get(this.endpoint + 'sprints', {
            params: new HttpParams()
            .set('user', this.profile.email)
        }).pipe(
            map(this.extractData));
    }

    deleteAllSprintsByUser(): Observable<any> {
        return this.http.delete(this.endpoint + 'sprints', {
            params: new HttpParams()
            .set('user', this.profile.email)
        }).pipe(
            map(this.extractData));
    }

    createSprint(sprint: Sprint): Observable<any> {
        //add user to sprint
        let body = JSON.stringify(sprint);
        return this.http.put(this.endpoint + 'sprints', body, this.httpOptions).pipe(
            map(this.extractData));
    }

    findSprints(user:string, filter = ''): Observable<any> {
        return this.http.get(this.endpoint + 'sprints/filteredSprints', {
            params: new HttpParams()
            .set('user', user)
            .set('filter', filter)
        }).pipe(
            map(this.extractData));
    }

}
