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

import { SprintsComponent } from "./sprints/sprints.component";
import { ProfileComponent } from './profile/profile.component';
import { PastSprintsComponent } from './past-sprints/past-sprints.component';
import { NewSprintComponent } from './new-sprint/new-sprint.component';

@NgModule({
  declarations: [
      SprintsComponent,
      ProfileComponent,
      PastSprintsComponent,
      NewSprintComponent
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
    MatTableModule
  ]
})
export class SprintModule { }
