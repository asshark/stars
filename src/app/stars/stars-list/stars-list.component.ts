import { Component, OnInit, Input, HostListener  } from '@angular/core';
import { Star } from '../../model/star';
import { StarService } from '../../star-service/star.service';
//import {FilterPipe, SortByPipe, FilterByTagPipe, FilterByFirstLetterPipe, TimesPipe} from '../../filters/pipes'
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'stars-list',
  host: {'window:beforeunload':'onClose'},
  templateUrl: './stars-list.component.html',
  styleUrls: ['./stars-list.component.css']
})
export class StarsListComponent implements OnInit {
 
  filterName: string;
  orderProp: string;
  allstars: Observable<Star[]>;
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
    this.getMyStars();
    this.alphabet = "*abcdefghijklmnopqrstuvwxyz".split("");
    this.activeLetter = '*';
    this.orderProp = "Alphabetical";
  }  

  @HostListener('window:beforeunload')
  onClose() {
    //var today = new Date();
    //this.cookieService.set( 'LastVisitDate', today.toString() );
  }

  getMyStars(): void {
    this.allstars = this.starService.oStars;
    this.allstars.subscribe(data=>
    {
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
      for(let st of this.starService.Stars)
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
