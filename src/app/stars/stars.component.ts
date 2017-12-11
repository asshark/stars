import { Component, OnInit, Input } from '@angular/core';
import { Star } from '../model/star';
import { StarService } from '../star-service/star.service';
import {FilterPipe, SortByPipe, FilterByTagPipe, FilterByFirstLetterPipe, TimesPipe} from '../filters/pipes'
import { TagInputModule } from 'ng2-tag-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed! 


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
  starTags: string[];

  constructor(
    private starService: StarService
  ) { }

  ngOnInit() {
    this.alphabet = "*abcdefghijklmnopqrstuvwxyz".split("");
    this.activeLetter = '*';
    this.getMyStars();
  }  

  getMyStars(): void {
    this.starService.getAllStar().subscribe(data=>
    {
      this.allstars = data;
      this.prepareUniqueTags();
      console.log(data);
    });
  }



  addTagToFilter(tag: string): void
  {
    var index =this.tagFilter.indexOf(tag);
    if (index == -1)
        this.tagFilter.push(tag);
    else
        this.tagFilter.splice(index, 1);
  }

  setActiveLetter (letter:string): void
  {
    this.activeLetter = letter;
  }

  prepareUniqueTags(): void
  {
    this.tagFilter = new Array();
    this.uniqTags = new Array();

    if(this.allstars != null)
    {
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
  }

  starClicked(st: Star, i: number)
  {
    console.log("span clicked function called");
    st.rank = i;
    this.starService.saveStar(st).subscribe();
  }

  tagClicked(st: Star, tag: string)
  {
    console.log("span clicked function called");
    var i = st.tags.indexOf(tag);
    if(i >= 0)
    {
      st.tags.splice(i,1);
      this.starService.saveStar(st).subscribe();
    }
  }

  addNewTag(st: Star, tag: string)
  {
    st.tags.push(tag);
  }

}
