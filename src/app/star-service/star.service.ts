import { Injectable } from '@angular/core';
import { Star } from '../model/star';
import { Clip } from '../model/clip';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../message-service/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StarService {

  //private starsUrl = './assets/db/allstars.json';  // URL to web api
  private starsUrl = 'http://localhost:39958/StarService.svc/GetAllStars/';  // URL to web api
  private clipsUrl = './assets/db/stars/';  // URL to web api

  oStars: Observable<Star[]>;
  Stars: Star[];

  constructor( private http: HttpClient,  private messageService: MessageService ) 
    {
      this.messageService.addLog('Service instance created');
      this.oStars = this.http.get<Star[]>(this.starsUrl);
      this.oStars
      .subscribe(data => 
        {
          this.Stars = data;
          this.log(`Items in Star db = ${data.length}`), error => console.log(error)
        });
    }

  public getAllStar(): Observable<any> {
      return this.oStars;
    }

  getStar(id: string): Star {
    this.log(`fetched hero id=${id}`);
    var ret = null;
    if(!this.Stars)
      return null;

    this.Stars.forEach(element => {
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
