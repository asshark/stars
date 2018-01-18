import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Star } from '../../model/star';
import { StarService } from '../../star-service/star.service';
 
@Component({
  selector: 'stars-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {


  reportType: string;
  topStars: Star[];
  ReportTitle: string;
  
 
  constructor(private starService: StarService, private route: ActivatedRoute) {
    this.reportType = route.snapshot.data[0]['reportType'];
   }
 
  ngOnInit() {
    this.getTopStars();
    this.starService.setCredentials("arek");
  }

  makeSeenAll():void
  {
    var r = this.starService.makeSeenStars(this.topStars).subscribe();
  }  


  getTopStars(): void {
      var self = this;
      this.starService.oStars.subscribe
      (allS => 
        {
          this.topStars = allS.filter(item => 
            { 
              if(this.reportType === 'TOP')
              {
                this.ReportTitle = 'Top Stars';
                return ( (item.rank as number) > 4)
              }
              else if(this.reportType === 'MOD')
              {
                  this.ReportTitle = 'Modified Stars';
                  return ( item.modifieddt > item.lastseendt )
              }
              else if(this.reportType === 'NEW')
              {
                this.ReportTitle = 'New Stars';
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