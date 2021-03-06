import { Component, OnInit, Input } from '@angular/core';
import { Star } from '../../model/star';
import { Clip } from '../../model/clip';
import { StarService } from '../../star-service/star.service';
import { isType } from '@angular/core/src/type';
import {TimesPipe} from '../../filters/pipes'


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() item: any;

  constructor(private starService: StarService) { }

  ngOnInit() {
  }

  itemClicked(i: number)
  {
    console.log("span clicked function called");
    //cl.starid = this.selectedStar.id;
    this.item.rank = i;
    this.saveChanges();
  }

  saveChanges()
  {
    this.starService.saveItem(this.item);
  }  

}
