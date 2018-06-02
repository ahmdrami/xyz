import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent implements OnInit {
    userForm: FormGroup;
    isLoading: boolean;
    isError: boolean;
    constructor(private fb: FormBuilder, private authSvc: AuthService, private router: Router) {}

    ngOnInit() {
        if (this.authSvc.getAuthState) {
            this.router.navigate(['']);
        }
        this.buildForm();
    }

    login(): void {
        this.isLoading = true;
        this.isError = false;
        const username = this.userForm.value['username'];
        const password = this.userForm.value['password'];
        let token = null;
        this.authSvc.login(username, password).subscribe(
            (resp: User[]) => {
                if (resp.length > 0) {
                    resp.map(user => (token = user.token));
                    this.authSvc.storeToken(username, token);
                }

                // Mock server does not return an error when a user does not exist or incorrect credentials
                // Have to return a boolean if there is an error
                this.isError = true;
                this.isLoading = false;
            },
            error => console.log(error)
        );
    }
    buildForm(): void {
        this.userForm = this.fb.group({
            username: ['', [Validators.required]],
            password: [
                '',
                [
                    Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(25)
                ]
            ]
        });
    }
}
