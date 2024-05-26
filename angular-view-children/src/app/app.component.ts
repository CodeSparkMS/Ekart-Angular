import { ElementRef } from '@angular/core';
import { QueryList } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-view-children';

  fullname: string = '';

  // With @ViewChild() Directive
  // @ViewChild('inputEl') inputByUser: ElementRef;
  // showFullName() {
  //   console.log('Full Name...', this.inputByUser.nativeElement);
  // }

  // With @ViewChildren() Directive

  @ViewChildren('inputEl') nameInputs: QueryList<ElementRef>;

  showFullName() {
    let name = '';

    this.nameInputs.forEach((e) => {
      name += e.nativeElement.value + ' ';
    });

    this.fullname = name.trim();

    console.log('Full Name...', name);
  }
}
