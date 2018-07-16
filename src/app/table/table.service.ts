import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TableService {
  baseUrl: string;
  userDetails: any;
  token: string;
  url: any;
  constructor(private http: HttpClient) {
  }


  userSearch(): Observable<any> {
    return this.http.get('assets/json/data.json');
  }
}