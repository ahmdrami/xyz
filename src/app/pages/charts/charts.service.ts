import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ChartsService {

  constructor(
    private http: HttpClient
  ) { }

  getData(endpoint: string): Observable<any> {
    return this.http.get(`/api/${endpoint}`)
      .pipe(
        delay(2000)
      );
  }
}
