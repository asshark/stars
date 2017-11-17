import { Component, OnInit, Input } from '@angular/core';
import { Star } from '../model/star';
import { StarService } from '../star-service/star.service';
import {FilterPipe, SortByPipe, FilterByTagPipe, FilterByFirstLetterPipe} from '../filters/pipes'

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
 
  allstars: Star[];
  uniqTags: string[];
  @Input() tagFilter: string[];
  alphabet:string[]; 
  activeLetter: string;

  constructor(
    private starService: StarService
  ) { }


  addTagToFilter(tag: string): void
  {
    var index =this.tagFilter.indexOf(tag);
    if (index == -1)
        this.tagFilter.push(tag);
    else
        this.tagFilter.splice(index, 1);

    //console.log("Tag Filter : " + this.tagFilter);
  }

  setActiveLetter (letter:string): void
  {
    this.activeLetter = letter;
  }

  prepareUniqueTags(): void
  {
    this.tagFilter = new Array();
    this.uniqTags = new Array();

    for(let st of this.allstars)
    {
      var localTags = [];
      localTags = st.tags;
      for (var i = 0; i < localTags.length; i++) 
      {
        if (this.uniqTags == null || this.uniqTags.indexOf(localTags[i]) == -1)
          this.uniqTags.push(localTags[i]);
      }
    }
  }

  getMyStars(): void {
    if(this.starService.allStars != null && this.starService.allStars.length >0)
    {
      this.allstars = this.starService.allStars;
      this.prepareUniqueTags();
    }
    else
    {
      this.starService.getAllStarJSON().subscribe(data=>
      {
        this.allstars = data;
        this.prepareUniqueTags();
        console.log(data);
      });
    }
  }

  ngOnInit() {
    this.alphabet = "*abcdefghijklmnopqrstuvwxyz".split("");
    this.activeLetter = '*';
    this.getMyStars();
  }
 
}
