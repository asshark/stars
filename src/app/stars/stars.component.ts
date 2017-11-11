import { Component, OnInit } from '@angular/core';
import { Star } from '../model/star';
import { StarService } from '../star-service/star.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
 
  allstars: Star[];
  constructor(private starService: StarService) { }

  getMyStars(): void {
    //this.starService.getAllStarJSON().subscribe(data=>{
    //  this.allstars = data;
    //  console.log(data);
    //});
    this.allstars = this.starService.allStars;
  }

  ngOnInit() {
    this.getMyStars();
  }
 
}
