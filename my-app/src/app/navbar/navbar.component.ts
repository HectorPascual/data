import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cs = new CustomerService();
  constructor() {
  }

  ngOnInit() {
    console.log("!!",this.cs.isLogged());
  }


}
