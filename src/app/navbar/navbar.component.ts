import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Security } from '../utils/security.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  public user: User;

  ngOnInit(): void {
    this.user = Security.getUser();
  }
}
