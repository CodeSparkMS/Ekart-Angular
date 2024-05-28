import {
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnChanges, OnInit, DoCheck {
  testVar1: string = 'Hello Mohanish';

  // @Input() testVar2: string = 'Hi';

  constructor() {
    console.log('Demo component is called');
    console.log('this.testVar1...', this.testVar1);
    // console.log('this.testVar2...', this.testVar2);
  }

  @Input() parentMessage: string = '';

  @ViewChild('temp') msgRef: ElementRef;

  // ngOnChanges() Life Cycle Hook
  ngOnChanges() {
    console.log('ngOnChange called....');
    console.log('parentMessage...', this.parentMessage);
  }

  //ngOnInit() Life Cycle Hook
  ngOnInit() {
    console.log('ngOnInit called...');
    // console.log('ngOnInit...msgRef...msgRef...msgRef',this.msgRef.nativeElement); // It gives error as @ViewChild() decorated property is not available
  }

  //ngDoCheck Life Cycle Hook
  ngDoCheck() {
    console.log('ngDoCheck called....');
  }
}
