import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit {

  sprints: any = [];

  constructor(public auth: AuthService, public apiClient: ApiClientService) { }

  ngOnInit() {
    this.getAllSprints();
  }

  getAllSprints() {
    this.sprints = [];
    this.apiClient.getAllSprints().subscribe((data: {}) => {
      console.log(data);
      this.sprints = data;
    })
  }

}
