import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Sprint } from 'src/app/models/sprint';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-new-sprint',
    templateUrl: './new-sprint.component.html',
    styleUrls: ['./new-sprint.component.css'],
})
export class NewSprintComponent implements OnInit {
    description = new FormControl('');
    name = 'Pomodoro';
    notify = false;
    profile;

    constructor(private auth: AuthService,
        private apiClient: ApiClientService) { }

    ngOnInit() {
        this.getUser();
    }

    createSprint() {
        let sprint: Sprint = new Sprint();
        let unit = (name == "Instant") ? 0 : 1;
        sprint.sprintType = {
            name: this.name,
            duration: unit,
            status: 0,
            unit: 0
        }
        sprint.user = this.profile.email;
        sprint.progress = 0;
        sprint.notify = this.notify;
        sprint.createdAt = Date.now();
        sprint.startedAt = Date.now();
        sprint.finishedAt = undefined;
        sprint.description = this.description.value;

        this.apiClient.createSprint(sprint).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log("Error creating sprint: " + error.message);
            });


    }

    private getUser() {
        this.auth.userProfile$.subscribe(val => {
            this.profile = val;
        });
    }

}
