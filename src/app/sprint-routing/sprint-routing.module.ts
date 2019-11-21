import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintsComponent } from "../sprint/sprints/sprints.component";
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
    {
        path: '',
        component: SprintsComponent
    }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SprintRoutingModule { }
