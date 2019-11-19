import { Component, OnInit } from '@angular/core';
import { AuthDbService, TokenPayload } from 'src/app/services/auth/auth-db.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    credentials: TokenPayload = {
        email: '',
        name: '',
        password: ''
      };

    constructor(private authDb : AuthDbService, private router: Router) { }

    ngOnInit() {
    }
    register() {
        this.authDb.register(this.credentials).subscribe(() => {
        this.router.navigateByUrl('/home');
        }, (err) => {
        console.error(err);
        });
    }

}
