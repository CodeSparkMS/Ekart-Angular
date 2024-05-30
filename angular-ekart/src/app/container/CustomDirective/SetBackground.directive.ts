import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

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
  constructor(private element: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = '#28282B';
    // this.element.nativeElement.style.color = 'white';

    // USE OF Renderer2 to manipulate the DOM element withpout accessing it directly
    this.render.setStyle(this.element.nativeElement,'backgroundColor','green')
    this.render.setStyle(this.element.nativeElement, 'color','white')
  }


}
