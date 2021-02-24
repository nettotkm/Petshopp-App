import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';
import { Security } from '../utils/security.util';
import { Router } from '@angular/router';
import { Cart } from '../models/cart.model';
import { CartUtil } from '../utils/cart.util';
import { CartItem } from '../models/cart-item.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  @Input() item: CartItem;
  public user: User;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = Security.getUser();

    console.log('131331313131313');
  }

  logout() {
    Security.clear();
    this.router.navigate(['/login']);
  }
}
