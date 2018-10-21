import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { CustomerService} from '../customer.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = "peter@klaven";
  password : string = "cityslicka";

  constructor(private api: ApiService, private customer: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  tryLogin() {
    this.api.login(
      this.email,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.customer.setToken(r.token);
            console.log(r.token);
            this.router.navigateByUrl('/main');
          }
        },
        r => {
          alert(r.error.error);
        });
}

}
