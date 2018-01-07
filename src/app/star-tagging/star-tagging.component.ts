import { Component, OnInit,Input } from '@angular/core';
import { Star } from '../model/star';
import { Clip } from '../model/clip';
import { StarService } from '../star-service/star.service';
import { isType } from '@angular/core/src/type';

@Component({
  selector: 'app-star-tagging',
  templateUrl: './star-tagging.component.html',
  styleUrls: ['./star-tagging.component.css']

})
export class StarTaggingComponent implements OnInit {

  @Input() item: any;

  constructor(private starService: StarService) { 
    
  }

  ngOnInit() {
  }

  tagClicked(tag: string)
  {
    var i = this.item.tags.indexOf(tag);
    if(i >= 0)
    {
      this.item.tags.splice(i,1);
      this.saveChanges();
    }
  }

  addNewTag(tag: string)
  {
    var i = this.item.tags.indexOf(tag);
    if(i < 0)
    {
      this.item.tags.push(tag);
      this.saveChanges();
    }
  }

  saveChanges()
  {
    this.starService.saveItem(this.item);
  }

}
