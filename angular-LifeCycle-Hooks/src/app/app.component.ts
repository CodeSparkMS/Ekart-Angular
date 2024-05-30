import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-LifeCycle-Hooks';

  constructor() {
    console.log('App component is called');
  }

  text: string = '';

  // @ViewChild('inputVal') parValRef: ElementRef;    // We can also use @ViewChild() here

  inputValueFun(inputEl: HTMLInputElement) {
    // console.log(inputEl.value);
    this.text = inputEl.value;
    // console.log('parValRef...', this.parValRef.nativeElement.value);
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit hook called in PARENT component class....');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked hook called in PARENT component class....');
  }

  toDestroy: boolean = false;

  destroyComponent() {
    this.toDestroy = !this.toDestroy;
  }
}
