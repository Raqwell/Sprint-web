import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from "@angular/forms";
import { SprintRoutingModule } from '../sprint-routing/sprint-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SprintsComponent } from "./sprints/sprints.component";
import { ProfileComponent } from './profile/profile.component';
import { PastSprintsComponent, DeleteSprintsDialogComponent } from './past-sprints/past-sprints.component';
import { NewSprintComponent } from './new-sprint/new-sprint.component';

@NgModule({
  declarations: [
      SprintsComponent,
      ProfileComponent,
      PastSprintsComponent,
      NewSprintComponent,
      DeleteSprintsDialogComponent
  ],
  imports: [
    CommonModule,
    SprintRoutingModule,
    MatTabsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
      DeleteSprintsDialogComponent
  ]
})
export class SprintModule { }
