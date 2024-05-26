import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  // selectedProduct: Product;

  @Input()
  productListCompProduct: ProductListComponent;

  product: Product;

  ngOnInit() {
    this.product = this.productListCompProduct.selectedProduct;

    console.log('This product...', this.product);
  }
}
