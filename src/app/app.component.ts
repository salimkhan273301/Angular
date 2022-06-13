import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstApp';
  a=1000;
  b=100;
  sub(){
    return this.a-this.b;
  }
  obj={
    name:'salim',
   age:20,
   number:9838852973
  }
  arr=['salim','nadeem','amir','hasan']
}
