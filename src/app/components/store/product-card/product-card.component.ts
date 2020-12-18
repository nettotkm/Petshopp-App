import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CartUtil } from '../../../utils/cart.util';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  addToCart() {
    CartUtil.add(
      this.product._id,
      this.product.title,
      1,
      this.product.price,
      this.product.images[0]
    );
    this.toastr.success(
      `${this.product.title} adicionado ao carrinho`,
      'Produto Adicionado'
    );
  }
}
