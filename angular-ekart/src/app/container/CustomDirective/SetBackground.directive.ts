import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackground {
  private element: ElementRef;
  constructor(element: ElementRef) {
    // element.nativeElement.style.backgroundColor = '#28282B';
    // element.nativeElement.style.color = 'white';
    this.element = element;
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = '#28282B';
    this.element.nativeElement.style.color = 'white';
  }
}
