import { Component, OnInit } from '@angular/core';


import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { Sprint } from '../../models/sprint';

@Component({
  selector: 'app-past-sprints',
  templateUrl: './past-sprints.component.html',
  styleUrls: ['./past-sprints.component.css']
})
export class PastSprintsComponent implements OnInit {
    sprints: Sprint[];
    displayedColumns: string[] = ['length', 'status', 'date', 'start', 'finish', 'description'];

    constructor(public auth: AuthService, public apiClient: ApiClientService) { }

    ngOnInit() {
        this.getAllSprintsByUser();
    }

    getAllSprintsByUser() {
        this.apiClient.getAllSprintsByUser().subscribe((sprints: Sprint[]) => {
            this.sprints = sprints;
        });
    }


}
