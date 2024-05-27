import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ng-container';

  boolVar: boolean = true;

  toggleFun() {
    this.boolVar = !this.boolVar;
  }

  items: any = [
    {
      id: 1,
      name: 'Item 1',
      isActive: true,
      price: 10.99,
    },
    {
      id: 2,
      name: 'Item 2',
      isActive: false,
      price: 5.49,
    },
    {
      id: 3,
      name: 'Item 3',
      isActive: true,
      price: 12.0,
    },
    {
      id: 4,
      name: 'Item 4',
      isActive: false,
      price: 7.75,
    },
    {
      id: 5,
      name: 'Item 5',
      isActive: true,
      price: 15.3,
    },
  ];
}
