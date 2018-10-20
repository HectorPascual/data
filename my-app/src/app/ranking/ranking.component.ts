import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service'

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  rows:any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getUsers()
      .subscribe(res => {
        console.log(res);
        this.rows = res;
      }, err => {
        console.log(err);
      });
  }

}
