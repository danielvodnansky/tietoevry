import { Component } from '@angular/core';
import { JsonCallService } from './json-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tietoevry';
  number: number = null;
  constructor(private service: JsonCallService) { }

  public callBackend() {
    this.service.callAPI(this.number);
  }
}
