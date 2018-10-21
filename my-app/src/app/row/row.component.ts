import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service'

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  name:string;
  id:number;
  position:number;
  best_score:string;

  constructor(private api: ApiService) { }


  ngOnInit() {
  }



}
