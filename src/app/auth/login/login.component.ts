import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    errors: any = []
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {}

    login(loginForm){
        this.authService.login(loginForm.value).subscribe(
            (token) => { 
                this.router.navigate(['/schedules'])
             },
            (err: HttpErrorResponse) => {
                console.error(err)
                this.errors = err.error.errors
            }
            

        )

    }
}
