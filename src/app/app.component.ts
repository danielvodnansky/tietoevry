import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonCallService, NUMBER_RANGE } from './json-call.service';
import { JsonData, Item } from './json-data.type';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, MatSortable } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatSort) sort: MatSort

  public title = 'tietoevry';
  public number: number = null;
  public data: JsonData = null;
  public loading = false;
  public range = NUMBER_RANGE;
  public displayedColumns: string[] = ['name', 'status'];

  constructor(private service: JsonCallService, private _snackBar: MatSnackBar) { }

  public callBackend() {
    this.loading = true;
    this.service.callAPI(this.number)
      .subscribe(
        (data: JsonData) => {
          this.data = this.sortData(data);
          this.loading = false;
        },
        (error: HttpErrorResponse) => {
          console.error(error);
          this.data = null;
          this.loading = false;
          if (this.number > 1) this.number--;
          this._snackBar.open('API call error', 'Close', {
            duration: 3000
          });
        });
  }

  public isNumberValid(): boolean {
    return this.service.validateNumber(this.number);
  }

  private sortData(data: JsonData): JsonData {
    data.items.sort(
      (a: Item, b: Item) => a.status.localeCompare(b.status) || a.name.localeCompare(b.name));
    return data;
  }

}
