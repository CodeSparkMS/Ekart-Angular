import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',   // we can use "template" property as template: './app.component.html'
  // template: "./app/component.html",   //
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ekart';
  name = 'Mohanish';
}
