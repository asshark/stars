import { Component, OnInit } from '@angular/core';
import { Star } from '../model/star';
import { StarService } from '../star-service/star.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  topstars: Star[];
  newstars: Star[];
 
  constructor(private starService: StarService) { }
 
  ngOnInit() {
    this.getTopStars();
    this.starService.setCredentials("arek");
  }
 
  getTopStars(): void {
    //
    var self = this;
    this.starService.getAllStar().subscribe
    (allS => 
      {
        this.topstars = allS.filter(item => 
          { 
            console.log('...items....' + item.rank);
            return ( (item.rank as number) > 4)
          });
          this.newstars = allS.filter(item => 
            { 
              console.log('...items....' + item.rank);
              return ( item.addeddt > self.starService.lastVisitDate )
            });      
      }
    );
  }
}