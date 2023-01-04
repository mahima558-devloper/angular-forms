import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // name = 'Angular ' + VERSION.major;
  // title = 'Mahima Form';
  // display = false;
  // userData: any = {};
  // toogle() {
  //   this.display = !this.display;
  // }
  // getData(data: NgForm) {
  //   console.warn(data);
  //   this.userData = data;
  // }
  title = 'todo list form';
  list: any[] = [];
  newTaskAdd(item: any) {
    this.list.push({ id: this.list.length, name: item });
    console.log(this.list);
  }
  remove(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
    console.warn(id);
  }
}
