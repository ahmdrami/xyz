import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../pages/login/user.model';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userEndpoints = '/api/users';
    storageId = 'currentUser';
    loginUrl = '/login';
    isAuth: boolean;
    constructor(private http: HttpClient, private router: Router) {}

    login(username: string, password: string): Observable<any> {
        return this.http.get(`${this.userEndpoints}?username=${username}&password=${password}`).pipe(delay(1000));
    }

    storeToken(username: string, token: string): void {
        sessionStorage.setItem(
            this.storageId,
            JSON.stringify({
                username: username,
                token: token
            })  
        );
        this.navigateRoute('/');
    }

    getAuthState(): boolean {
        return this.isAuth;
    }
    checkAuth(): boolean {
        this.isAuth = (sessionStorage.getItem(this.storageId)) ? true : false;
        if (this.isAuth) {
            return true;
        }

        this.navigateRoute(this.loginUrl);
        return false;
    }
    logout(): void {
        sessionStorage.removeItem(this.storageId);
        this.navigateRoute(this.loginUrl);
    }

    navigateRoute(url: string): void {
        this.router.navigate([url]);
    }
}
