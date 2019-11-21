import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.css'],
})
export class NewSprintComponent implements OnInit {
    description = new FormControl('');
    name = 'Pomodoro';
    notify = false;

  constructor() { }

  ngOnInit() {
  }

}
