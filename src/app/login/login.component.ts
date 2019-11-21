import { Component, OnInit } from '@angular/core';
import { AuthDbService, TokenPayload } from 'src/app/services/auth/auth-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    credentials: TokenPayload = {
        email: '',
        password: ''
      };

    constructor(private authDb: AuthDbService, private router: Router) { }

    ngOnInit() {
    }

    login() {
        this.authDb.login(this.credentials).subscribe(() => {
        this.router.navigateByUrl('/home');
        }, (err) => {
        console.error(err);
        });
    }

    logout() {
        this.authDb.logout();
    }

}
