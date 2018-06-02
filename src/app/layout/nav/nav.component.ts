import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styles: [
        `
        a.navbar-item.is-active:not(:hover), .navbar-link.is-active:not(:hover) {
            background-color: hsl(204, 86%, 53%);
            color: #fff;
        }
        `
    ]
})
export class NavComponent {
    _toggleNav: boolean;
    constructor(private authSvc: AuthService) {
    }

    logout(): void {
        this.authSvc.logout();
    }

    toggleNav(): void {
        this._toggleNav = !this._toggleNav;
    }
}
