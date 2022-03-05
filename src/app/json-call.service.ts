import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonData } from './json-data.type';

@Injectable({
  providedIn: 'root'
})
export class JsonCallService {

  private apiUrl = 'http>://localhost:3001';

  constructor(private http: HttpClient) { }

  public callAPI(number: number) {
    return this.http.get(this.apiUrl)
      .subscribe((data: JsonData) => console.log);;
  }

}
