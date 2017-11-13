import { Injectable } from '@angular/core';

import { Star } from '../model/star';
import { STARS } from '../model/mock-stars';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../message-service/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StarService {

  private starsUrl = './assets/db/allstars.json';  // URL to web api

  allStars: Star[];
  items: Observable<Star[]>;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) 
    {
      this.items = this.http.get(this.starsUrl) as Observable<Star[]>;
      this.items.subscribe(data => {this.allStars = data, this.log(`Items in db 1 = ${this.allStars.length}`), error => console.log(error)});
    }

  public getAllStarJSON(): Observable<any> {
      
      return this.items;
    }

  getStars(): Star[] {
    return this.allStars;
  }

  getStar(id: string): Star {
    // Todo: send the message _after_ fetching the hero
    this.log(`fetched hero id=${id}`);
    this.log(`Items in db 2 = ${this.allStars.length}`);
    var s = this.allStars.filter(item => {item.id === id})[0];
    this.log(`found hero id= ${s}`);
    return s;
    //of(this.getAllStarJSON().subscribe(sts=>{sts.find(st => {st.id === id})[0]}));
    //return of(STARS.find(st => st.id === id));
  }

  private log(message: string) {
    this.messageService.addLog('StarService: ' + message);
  }

}
