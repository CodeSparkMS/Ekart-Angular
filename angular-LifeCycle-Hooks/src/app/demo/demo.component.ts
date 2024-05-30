import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  testVar1: string = 'Hello Mohanish';

  // @Input() testVar2: string = 'Hi';

  constructor() {
    console.log('Demo component is called');
    // console.log('this.testVar1...', this.testVar1);
    // console.log('this.testVar2...', this.testVar2);
  }

  @Input() parentMessage: string = '';

  @ViewChild('temp') msgRef: ElementRef;

  @ContentChild('parent') parentEle: ElementRef;

  // ngOnChanges() Life Cycle Hook
  // ngOnChanges() {
  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChange called....', changes); // changes give current value and previous value
    // console.log('parentMessage...', this.parentMessage);
  }

  //ngOnInit() Life Cycle Hook
  ngOnInit() {
    // console.log('ngOnInit called...');
    // console.log('ngOnInit...msgRef...msgRef...msgRef',this.msgRef.nativeElement); // It gives error as @ViewChild() decorated property is not available
  }

  //ngDoCheck Life Cycle Hook
  ngDoCheck() {
    // console.log('ngDoCheck called....');
    // console.log('parentEle in ngDoCheck...', this.parentEle);
  }

  //ngAfterContentInit() Life Cycle Hook
  ngAfterContentInit() {
    // console.log('ngAfterContentInit hook called...');
    // console.log(
    //   'parentEle in ngAfterContentInit...',
    //   this.parentEle.nativeElement
    // );
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked hook called....');
    // console.log(
    //   'parentEle in ngAfterContentChecked...',
    //   this.parentEle.nativeElement
    // );
    //test for ngAfterViewInit
    // console.log(
    //   'ngAfterContentChecked...msgRef...msgRef...msgRef...',
    //   this.msgRef
    // );
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit hook called....');
    // console.log(
    //   'ngAfterViewInit...msgRef...msgRef...msgRef...',
    //   this.msgRef.nativeElement
    // );
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked hook called...');
    // console.log(
    //   'ngAfterViewChecked...msgRef...msgRef...msgRef...',
    //   this.msgRef.nativeElement
    // );
  }

  ngOnDestroy() {
    console.log('ngOnDestroy hook called...');
  }
 
}