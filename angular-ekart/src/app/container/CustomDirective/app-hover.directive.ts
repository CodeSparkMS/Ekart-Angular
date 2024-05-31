import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class AppHoverDirective {
  constructor(private element: ElementRef, renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') bgColor: string = 'green';
  @HostBinding('style.border') border: string = 'blue 2px solid';
  @HostBinding('style.color') color: string = 'white';

  @HostListener('mouseover') OnMouseOver() {
    this.bgColor = 'white';
    this.border = 'red 3px solid';
    this.color = 'black';
  }

  @HostListener('mouseout') OnMouseOut() {
    this.bgColor = 'gren';
    this.border = 'blue 2px solid';
    this.color = 'black';
  }

   

}
