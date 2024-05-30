import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
  //   private element: ElementRef;
  //   constructor(element: ElementRef) {
  //     // element.nativeElement.style.backgroundColor = '#28282B';
  //     // element.nativeElement.style.color = 'white';
  //     this.element = element;
  //   }

  // OR
  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = '#28282B';
    this.element.nativeElement.style.color = 'white';
  }
}
