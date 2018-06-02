import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImgModel } from './img-detail/img';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ImgListService {
    endpoint = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private http: HttpClient) {}

    getPosts(): Observable<ImgModel[]> {
        return this.http.get<ImgModel[]>(this.endpoint);
    }
}
