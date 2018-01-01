import { Component, OnInit } from '@angular/core';
import { Star } from '../model/star';
import { StarService } from '../star-service/star.service';

@Component({
  selector: 'app-stars-new',
  templateUrl: './stars-new.component.html',
  styleUrls: ['./stars-new.component.css']
})
export class StarsNewComponent implements OnInit {

  newStars: Star[];

  constructor(private starService: StarService) { }

  ngOnInit() {
    this.getNewStars();
  }

  getNewStars(): void {
    //
    var self = this;
    this.starService.getAllStar().subscribe
    (allS => 
      {
          this.newStars = allS.filter(item => 
              { 
                //var t = (item.lastseendt as Date).getFullYear();
                console.log('...last seen....' + item.lastseendt);

                var completedDate = new Date(parseInt(item.lastseendt.replace("/Date(", "").replace(")/")));
                // from http://www.webdeveloper.com/forum/showthread.php?67608-Date()-format-as-mm-dd-yyyy
                var dd = completedDate.getDate();
                var mm = completedDate.getMonth() + 1; //January is 0! 
                var yyyy = completedDate.getFullYear(); 

                return ( yyyy < 1950 );
            });                  
      }
    );
  }

}
