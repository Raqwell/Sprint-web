import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, debounceTime, tap } from 'rxjs/operators';
import { SprintsDataSource } from 'src/app/services/sprints.datasource';
import { SprintView } from 'src/app/models/sprintView';

@Component({
  selector: 'app-past-sprints',
  templateUrl: './past-sprints.component.html',
  styleUrls: ['./past-sprints.component.css']
})
export class PastSprintsComponent implements OnInit, AfterViewInit {
    profile: any;
    sprints: SprintView[];
    dataSource: SprintsDataSource;
    displayedColumns: string[] = ['length', 'status', 'date', 'start', 'finish', 'description'];
    filter : string;

    @ViewChild('input', {static: false}) input : ElementRef;

    constructor(public auth: AuthService,
        public apiClient: ApiClientService,
        private changeDetectorRefs: ChangeDetectorRef,
        public dialog: MatDialog) { }

    ngOnInit() {
        this.getUser();
        this.dataSource = new SprintsDataSource(this.apiClient);
        this.loadSprints();
    }

    ngAfterViewInit(): void {
        fromEvent(this.input.nativeElement, 'keyup').pipe(
            debounceTime(150),
            distinctUntilChanged(),
            tap(() => {
                this.filter = this.input.nativeElement.value,
                this.loadSprints();
            })
        ).subscribe();
    }

    loadSprints() {
        this.dataSource.loadSprints(this.profile.email, this.filter);
    }

    private getUser() {
        this.auth.userProfile$.subscribe(val => {
            this.profile = val;
        });
    }

    mapSprints() {
        // map sprints
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DeleteSprintsDialogComponent, {
          width: '250px'
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.loadSprints();
        });
      }

}

@Component({
    selector: 'app-delete-sprints-dialog',
    template: `<h1 mat-dialog-title>Deletion is irreversible. Are you sure?</h1>
    <div mat-dialog-content>
        <p>The only information concerning your user that we store are your past sprints. We do not store information about
            your user itself.</p>
        <p>Delete to eliminate all records.</p>
    </div>
    <div mat-dialog-actions>
        <button mat-raised-button color="primary" (click)="onNoClick()">No</button>
        <button mat-raised-button color="warn" (click)="deleteSprints()">Yes</button>
    </div>
    `
})
export class DeleteSprintsDialogComponent {
    constructor(public dialogRef: MatDialogRef<DeleteSprintsDialogComponent>,
        public apiClient: ApiClientService) { }

        onNoClick(): void {
            this.dialogRef.close();
          }

          deleteSprints() {
            this.dialogRef.close();
            this.apiClient.deleteAllSprintsByUser().subscribe(message => {
                console.log(message);
            });
        }
}

