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
                    resp.map(user => token = user.token);
                    this.authSvc.storeToken(username, token);
                }
                
                // JSON server does not return an error when username and password is incorrect
                // Have to enable the error within the success call over error
                this.isError = true;
                this.isLoading = false;
            },
            error => console.log(error)
        );
    }
    buildForm(): void {
        this.userForm = this.fb.group({
            username: ['', [Validators.required, Validators.email]],
            password: [
                '',
                [Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'), Validators.minLength(6), Validators.maxLength(25)]
            ]
        });
        // this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
        // this.onValueChanged(); // reset validation messages
    }
}
