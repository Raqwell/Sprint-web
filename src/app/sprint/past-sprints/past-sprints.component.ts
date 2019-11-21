import { Component, OnInit, ChangeDetectorRef } from '@angular/core';


import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { Sprint } from '../../models/sprint';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-past-sprints',
  templateUrl: './past-sprints.component.html',
  styleUrls: ['./past-sprints.component.css']
})
export class PastSprintsComponent implements OnInit {
    sprints: Sprint[];
    displayedColumns: string[] = ['length', 'status', 'date', 'start', 'finish', 'description'];

    constructor(public auth: AuthService,
        public apiClient: ApiClientService,
        private changeDetectorRefs: ChangeDetectorRef,
        public dialog: MatDialog) { }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.getAllSprintsByUser();
        this.changeDetectorRefs.detectChanges();
    }

    getAllSprintsByUser() {
        this.apiClient.getAllSprintsByUser().subscribe((sprints: Sprint[]) => {
            this.sprints = sprints;
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DeleteSprintsDialogComponent, {
          width: '250px'
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.refresh();
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

