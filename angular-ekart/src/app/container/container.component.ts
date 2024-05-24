import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  // // Name: String = 'Iphone 16';
  // // Price:Number = 999
  // // Color: String = "Matte Black"
  // // name = 'Mohanish Saim';
  // cartItems: number = 0;
  // product: any = {
  //   name: 'Iphone 16',
  //   price: 999,
  //   color: 'Matte Black',
  //   discount: 8.5,
  //   inStock: 10,
  //   productImage: '/assets/iphone16.webp',
  // };

  // getDiscountedPrice() {
  //   return (
  //     this.product.price - (this.product.price * this.product.discount) / 100
  //   );
  // }

  // onButtonClick() {}

  // // inputText(event: any) {
  // //   this.name = event.target.value;
  // //   console.log(event.target.value);
  // // }

  // addItem() {
  //   if (this.cartItems < this.product.inStock)
  //     this.cartItems = this.cartItems + 1;
  // }

  // removeItem() {
  //   this.cartItems = this.cartItems > 0 ? this.cartItems - 1 : 0;
  // }

  searchText: string = '';

  listOfStrings: string[] = [
    'shreyas',
    'mohanish',
    'rohan',
    'narendra',
    'prasad',
    'gaurav',
    'mahaveer'
  ];

  textFromChild(val: string) {
    console.log('Value in parent component...', val);
    this.searchText = val;
  }
}
