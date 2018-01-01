import { Component, OnInit } from '@angular/core';
import { Star } from '../model/star';
import { StarService } from '../star-service/star.service';


@Component({
  selector: 'app-stars-mod',
  templateUrl: './stars-mod.component.html',
  styleUrls: ['./stars-mod.component.css']
})
export class StarsModComponent implements OnInit {

  updatedStars: Star[];
  constructor(private starService: StarService) { }

  ngOnInit() {
    this.getModStars();
  }

  getModStars(): void {
    //
    var self = this;
    this.starService.getAllStar().subscribe
    (allS => 
      {
          this.updatedStars = allS.filter(item => 
            { 
              return ( item.modifieddt > item.lastseendt )
            });      
      }
    );
  }

}
