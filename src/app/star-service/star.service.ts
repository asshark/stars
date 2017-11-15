import { Injectable } from '@angular/core';

import { Star } from '../model/star';
import { Clip } from '../model/clip';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../message-service/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StarService {

  private starsUrl = './assets/db/allstars.json';  // URL to web api
  private clipsUrl = './assets/db/stars/';  // URL to web api

  allStars: Star[];
  items: Observable<Star[]>;

  constructor( private http: HttpClient,  private messageService: MessageService ) 
    {
      this.items = this.http.get(this.starsUrl) as Observable<Star[]>;
      this.items.subscribe(data => {this.allStars = data, this.log(`Items in Star db = ${this.allStars.length}`), error => console.log(error)});
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
    //var s = this.allStars.filter(st => {st.rank == 0})[0];
    var ret = null;
    this.allStars.forEach(element => {
      if(element.id === id)
      {
        this.log(`... id= ${element.id} compared with = ${id} and the result is ` + (element.id === id) );
        ret = (element as Star);
      }
    });
    return ret;
  }

  private log(message: string) {
    this.messageService.addLog('StarService: ' + message);
  }

  getStarClips(id: string): Observable<Clip[]> {
    return  this.http.get(this.clipsUrl + id + '.json') as Observable<Clip[]>;
  }

}
