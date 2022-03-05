import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonData } from './json-data.type';
import { Observable } from 'rxjs';

export const NUMBER_RANGE = {
  min: 1,
  max: 10,
};

@Injectable({
  providedIn: 'root'
})
export class JsonCallService {


  private apiUrl = 'http://localhost:3001/items';

  constructor(private http: HttpClient) { }

  public callAPI(number: number): Observable<JsonData> {
    return this.http.get<JsonData>(this.apiUrl);
  }

  public validateNumber(number: number): boolean {
    return number >= NUMBER_RANGE.min && number <= NUMBER_RANGE.max;
  }

}
