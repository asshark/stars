import { Component, OnInit, Input, HostListener  } from '@angular/core';
import { Star } from '../model/star';
import { StarService } from '../star-service/star.service';
import {FilterPipe, SortByPipe, FilterByTagPipe, FilterByFirstLetterPipe, TimesPipe} from '../filters/pipes'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-stars',
  host: {'window:beforeunload':'onClose'},
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
 
  filterName: string;
  orderProp: string;
  allstars: Star[];
  uniqTags: string[];
  @Input() tagFilter: string[];
  alphabet:string[]; 
  activeLetter: string;
  starTags: string[];

  constructor(
    private starService: StarService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    var cr = this.starService.getCredentials();
    this.alphabet = "*abcdefghijklmnopqrstuvwxyz".split("");
    this.activeLetter = '*';
    this.getMyStars();
    
  }  

  @HostListener('window:beforeunload')
  onClose() {
    //var today = new Date();
    //this.cookieService.set( 'LastVisitDate', today.toString() );
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
