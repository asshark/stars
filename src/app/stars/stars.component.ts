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
    if(this.starService.allStars != null && this.starService.allStars.length >0)
      this.allstars = this.starService.allStars;
    else
    {
      this.starService.getAllStarJSON().subscribe(data=>{
        this.allstars = data;
        console.log(data);
      });
    }

  }

  ngOnInit() {
    this.getMyStars();
  }
 
}