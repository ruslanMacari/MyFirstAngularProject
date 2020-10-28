import {Subject} from 'rxjs';

export class ProductsService {
  private products: string[] = ['A Book'];
  productsUpdated = new Subject();

  addProduct(product: string): void {
    this.products.push(product);
    this.productsUpdated.next();
  }

  getProducts(): string[] {
    return Object.assign([], this.products);
    // return [...this.products];
  }

  deleteProduct(product: string): void {
    this.products = this.products.filter(p => p !== product);
    this.productsUpdated.next();
  }
}
