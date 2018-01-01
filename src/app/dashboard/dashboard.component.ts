import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Star } from '../model/star';
import { StarService } from '../star-service/star.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {


  reportType: string;
  topStars: Star[];
  
  
 
  constructor(private starService: StarService, private route: ActivatedRoute) {
    this.reportType = route.snapshot.data[0]['reportType'];
   }
 
  ngOnInit() {
    this.getTopStars();
    this.starService.setCredentials("arek");
  }
 
  getTopStars(): void {
    
    

      var self = this;
      this.starService.getAllStar().subscribe
      (allS => 
        {
          this.topStars = allS.filter(item => 
            { 
              if(this.reportType === 'TOP')
                return ( (item.rank as number) > 4)
              else if(this.reportType === 'MOD')
                  return ( item.modifieddt > item.lastseendt )
              else if(this.reportType === 'NEW')
              {
                var completedDate = new Date(parseInt(item.lastseendt.replace("/Date(", "").replace(")/")));
                var dd = completedDate.getDate();
                var mm = completedDate.getMonth() + 1; //January is 0! 
                var yyyy = completedDate.getFullYear(); 

                return ( yyyy < 1950 );
              }
              else 
                return false;  
            });
        }
      );
  }
}