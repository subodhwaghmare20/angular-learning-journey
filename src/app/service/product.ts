import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor() {
    console.log('service Called');
  }
  getProduct() {
    return [
      {
        id: 1,
        name: 'Mobile',
        price: 10000,
      },
      {
        id: 2,
        name: 'Laptop',
        price: 20000,
      },
      {
        id: 3,
        name: 'Headphone',
        price: 3000,
      },
    ];
  }
}
