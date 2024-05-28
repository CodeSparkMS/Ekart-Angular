import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent {
  testVar1: string = 'Hello Mohanish';

  @Input() testVar2: string = 'Hi';

  constructor() {
    console.log('Demo component is called');
    console.log('this.testVar1...', this.testVar1);
    console.log('this.testVar2...', this.testVar2);
  }
}
