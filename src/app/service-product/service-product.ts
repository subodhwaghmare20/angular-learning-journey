import { Component } from '@angular/core';
import { Product } from '../service/product';

@Component({
  selector: 'app-service-product',
  imports: [],
  templateUrl: './service-product.html',
  styleUrl: './service-product.css',
})
export class ServiceProduct {
  constructor(private product: Product) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.product.getProduct());
  }
}
