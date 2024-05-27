import { Component, ContentChild, ElementRef } from '@angular/core';
import { TestComponent } from 'src/app/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @ContentChild('para') paragraphEl: ElementRef; // Getting reference of element from parent view template to child component

  @ContentChild(TestComponent) testEleRef: TestComponent;

  testFunc() {
    console.log(this.paragraphEl.nativeElement);
    console.log(this.testEleRef.name);
  }
}
