import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Sprint } from '../models/sprint';
import { ApiClientService } from './api-client/api-client.service';
import { catchError, finalize } from 'rxjs/operators';

export class SprintsDataSource implements DataSource<Sprint> {

    private sprintsSubject = new BehaviorSubject<Sprint[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private apiClient: ApiClientService) {

    }

    loadSprints(user:string, filter:string) {
        this.loadingSubject.next(true);
        this.apiClient.findSprints(user, filter)
        .pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe((sprints: Sprint[]) => {
            this.sprintsSubject.next(sprints);
        });;
    }

    connect(collectionViewer: CollectionViewer): Observable<Sprint[]> {
        return this.sprintsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.sprintsSubject.complete();
        this.loadingSubject.complete();
    }
}
