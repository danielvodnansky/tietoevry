import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { JsonCallService, NUMBER_RANGE } from './json-call.service';
import { JsonData } from './json-data.type';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'tietoevry';
  public number: number = null;
  public data: JsonData = null;
  public loading = false;
  public range = NUMBER_RANGE;

  constructor(private service: JsonCallService, private _snackBar: MatSnackBar) { }

  public callBackend() {
    this.loading = true;
    this.service.callAPI(this.number)
      .subscribe(
        (data: JsonData) => {
          this.data = data
          this.loading = false
        },
        (error: HttpErrorResponse) => {
          console.error(error)
          this.data = null
          this.loading = false
          this._snackBar.open('API call error', 'Close', {
            duration: 3000
          });
        });
  }

  public isNumberValid(): boolean {
    return this.service.validateNumber(this.number);
  }
}
