import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ChartsService {

  apiUrl = '/api/';
  constructor(
    private http: HttpClient
  ) { }

  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${endpoint}`)
      .pipe(
        delay(2000)
      );
  }
}
