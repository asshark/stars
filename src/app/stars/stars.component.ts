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

  ngOnInit() {
    this.alphabet = "*abcdefghijklmnopqrstuvwxyz".split("");
    this.activeLetter = '*';
    this.getMyStars();
  }  

  private deepArrayCopy(arr: Star[]): Star[] {
    const result: Star[] = [];
    if (!arr) {
      return result;
    }
    const arrayLength = arr.length;
    for (let i = 0; i <= arrayLength; i++) {
      const item = arr[i];
      if (item) {
        var st = new Star();
        st.id = item.id;
        st.name = item.name;
        result.push(st);
      }
    }
    return result;
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
}
