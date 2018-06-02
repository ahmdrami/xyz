import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { User } from '../../pages/login/user.model';

@Component({
    selector: 'app-profile',
    template: `
    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-item">
            {{ user.username }}
        </a>
        <div class="navbar-dropdown is-boxed">
            <a routerLink="/" class="navbar-item">
                Profile
            </a>
            <a routerLink="/" class="navbar-item">
                Settings
            </a>
        </div>

    </div>
  `,
    styles: []
})
export class ProfileComponent implements OnInit {

    user: User;
    constructor(private authSvc: AuthService) {}

    ngOnInit() {
        this.user = this.authSvc.getAuthState();
    }
}
