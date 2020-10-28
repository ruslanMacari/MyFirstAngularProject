import {Component} from '@angular/core';
import {ProductComponent} from './product/product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})

export class ProductsComponent {
  productName = 'A Book';
  isDisabled = true;
  products = ['A Book', 'A Tree'];

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  onAddProduct(): void {
    this.products.push(this.productName);
  }

  onRemoveProduct(productName: string): void {
    this.products = this.products.filter(p => p !== productName);
  }
}
