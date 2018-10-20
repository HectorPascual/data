import { Component, OnInit } from '@angular/core';
//import { User } from '../user';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;

  displayedColumns = ['id', 'name'];

  constructor(private api: ApiService) { }


  ngOnInit() {
    this.api.getUsers()
      .subscribe(res => {
        console.log(res);
        this.users = res;
      }, err => {
        console.log(err);
      });
  }

}
