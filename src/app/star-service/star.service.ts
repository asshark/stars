import { Injectable } from '@angular/core';
import { Star } from '../model/star';
import { Clip } from '../model/clip';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../message-service/message.service';
import { HttpClient, HttpHeaders, HttpEvent, HttpInterceptor, HttpRequest,HttpHandler } from '@angular/common/http';
import { Headers } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

@Injectable()
export class StarService {

  private starsBaseUrl = 'http://localhost:39958/StarService.svc/';  // URL to web api
  //private starsUrlGet = './assets/db/allstars.json';  // URL to web api
  private starsUrlGetAllStars = 'GetAllStars';  // URL to Get All Stars
  private starsUrlGetStarClips = 'GetAllClips/';  // URL to Get All Stars
  private starsUrlSaveStar ='Save';  // URL to SaveApi
  private clipsUrl = './assets/db/stars/';  // URL to web api

  oStars: Observable<Star[]>;
  Stars: Star[];

  constructor( private http: HttpClient,  private messageService: MessageService ) 
    {
      this.messageService.addLog('Service instance created');
      this.oStars = this.http.get<Star[]>(this.starsBaseUrl + this.starsUrlGetAllStars);
      this.oStars
      .subscribe(data => 
        {
          this.Stars = data;
          this.log(`Items in Star db = ${data.length}`), error => console.log(error)
        });
    }

    getStarClips(id: string): Observable<Clip[]> {
      return this.http.get(this.starsBaseUrl + this.starsUrlGetStarClips + id) as Observable<Clip[]>; 
      //this.http.get(this.clipsUrl + id + '.json') as Observable<Clip[]>;
    }
      

  public getAllStar(): Observable<any> {
      return this.oStars;
    }

  public saveStar(st: Star):Observable<Star>
  {
    //var st1 = new Star();
    return this.http.post<Star>(this.starsBaseUrl + this.starsUrlSaveStar, st, {
      headers : {
          'Content-Type' : 'application/json; charset=UTF-8'
      }});
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


}


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(JSON.stringify(req.headers));
        return next.handle(req);
    }
}
