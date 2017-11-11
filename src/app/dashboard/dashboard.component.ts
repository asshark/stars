import { Component, OnInit } from '@angular/core';
import { Star } from '../model/star';
import { StarService } from '../star-service/star.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  topstars: Star[] = [];
 
  constructor(private starService: StarService) { }
 
  ngOnInit() {
    this.getTopStars();
  }
 
  getTopStars(): void {
    console.log('...items....' + this.starService.allStars.length);
    this.starService.allStars.filter(function (item) { return item.rank > 4; })
    //getNum()
      //.subscribe(sts => this.topstars = sts.slice(1, 5));
  }
}