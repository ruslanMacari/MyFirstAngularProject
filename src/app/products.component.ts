import {Component} from '@angular/core';
import {ProductComponent} from './product/product.component';
import {AbstractControl, Form} from '@angular/forms';

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

  onAddProduct(form: AbstractControl): void {
    if (form.valid) {
      this.products.push(form.value.productName);
    }
  }

  onRemoveProduct(productName: string): void {
    this.products = this.products.filter(p => p !== productName);
  }
}
