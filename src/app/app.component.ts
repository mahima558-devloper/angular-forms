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
  display = false;
  userData: any = {};
  toogle() {
    this.display = !this.display;
  }
  getData(data: NgForm) {
    console.warn(data);
    this.userData = data;
  }
}
