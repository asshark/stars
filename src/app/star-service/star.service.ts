import { Injectable } from '@angular/core';

import { Star } from '../model/star';
import { STARS } from '../model/mock-stars';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../message-service/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StarService {

  private starsUrl = './assets/allstars.json';  // URL to web api

  allStars: Star[];

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) 
    {
      this.getAllStarJSON().subscribe(data => this.allStars=data, error => console.log(error));
    }

  public getAllStarJSON(): Observable<any> {
      return this.http.get(this.starsUrl)
        }

  getStars(): Star[] {
    return this.allStars;
  }

  getStar(id: string): Observable<Star> {
    // Todo: send the message _after_ fetching the hero
    this.log(`fetched hero id=${id}`);
    return of(STARS.find(st => st.id === id));
  }

  private log(message: string) {
    this.messageService.addLog('StarService: ' + message);
  }

}
