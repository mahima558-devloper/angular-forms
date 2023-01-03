import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  title = 'Mahima Form';
  userData: any = {};
  getData(data: NgForm) {
    console.warn(data);
    this.userData = data;
  }
}
