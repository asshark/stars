import { Injectable } from '@angular/core';
import { Star } from '../model/star';
import { Clip } from '../model/clip';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Headers } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http';

import { CookieService } from 'ngx-cookie-service';
import { MessageService } from '../message-service/message.service';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

@Injectable()
export class StarService {

  //private starsBaseUrl = 'http://localhost:39958/StarService.svc/';  // URL to web api
  private starsBaseUrl = 'http://srv.milen.pl/StarService.svc/';  // URL to web api

  //private starsUrlGet = './assets/db/allstars.json';  // URL to web api
  private starsUrlGetAllStars = 'GetAllStars';  // URL to Get All Stars
  private starsUrlGetStarClips = 'GetAllClips/';  // URL to Get All Stars
  private starsUrlSaveStar ='SaveStar';  // URL to SaveApi
  private starsUrlSaveClip ='SaveClip';  // URL to SaveApi
  private starsUrlDeleteStar ='DeleteStar';  // URL to SaveApi
  private starsUrlDeleteClip ='DeleteClip';  // URL to SaveApi
  private starsUrlMakeSeenStars = 'MakeSeenStars';

  private clipsUrl = './assets/db/stars/';  // URL to web api
  public lastVisitDate: Date;
  private credentials:string = '';

  public oStars: Observable<Star[]>;
  public Stars: Star[];

  constructor(  private http: HttpClient
                ,private messageService: MessageService
                ,private cookieService: CookieService 
              ) 
    {
      this.lastVisitDate = new Date(this.cookieService.get('LastVisitDate'));
      console.log('StarService instance created');
      this.oStars = this.http.get<Star[]>(this.starsBaseUrl + this.starsUrlGetAllStars);
      this.oStars
      .subscribe(data => 
        {
          this.Stars = data;
          this.log(`Items in Star db = ${data.length}`), error => console.log(error)
        });
  
    }

    getCredentials():string {
      return this.credentials;
    }
  
    setCredentials(credentials:string) {
      this.credentials = credentials;
    }

    getStarClips(id: string): Observable<Clip[]> {
      return this.http.get<Clip[]>(this.starsBaseUrl + this.starsUrlGetStarClips + id); 
    }
      
  public saveItem(item: any)
  {
    if(item.id !== undefined)//Star
    {
      this.saveStar(item as Star).subscribe();
      console.log("Star saved");
    }
    else//if(this.item.id !== undefined)Clip
    {
      this.saveClip(item as Clip).subscribe();
      console.log("Clip saved");
    }
  }

  public deleteItem(itemParent:any, item: any)
  {
    if(item.id !== undefined)//Star
    {
      this.deleteStar(item as Star).subscribe();
      console.log("Star saved");
    }
    else//if(this.item.id !== undefined)Clip
    {
      item.starid = itemParent.id; 
      this.deleteClip(item as Clip).subscribe();
      console.log("Clip saved");
    }
  }

  public saveStar(st: Star):Observable<Star>
  {
    //var st1 = new Star();
    return this.http.post<Star>(this.starsBaseUrl + this.starsUrlSaveStar, st, {
      headers : {
          'Content-Type' : 'application/json; charset=UTF-8'
      }});
  }

  public saveClip(cl: Clip):Observable<Clip>
  {
    //var st1 = new Star();
    return this.http.post<Clip>(this.starsBaseUrl + this.starsUrlSaveClip, cl, {
      headers : {
          'Content-Type' : 'application/json; charset=UTF-8'
      }});
  }

  public deleteStar(st: Star):Observable<string>
  {
    return this.http.post<string>(this.starsBaseUrl + this.starsUrlDeleteStar, st, {
      headers : {
          'Content-Type' : 'application/json; charset=UTF-8'
      }});
  }

  public deleteClip(cl: Clip):Observable<string>
  {
    //var st1 = new Star();
    return this.http.post<string>(this.starsBaseUrl + this.starsUrlDeleteClip, cl, {
      headers : {
          'Content-Type' : 'application/json; charset=UTF-8'
      }});
  }

  public makeSeenStars(sts: Star[]):Observable<string>
  {
    return this.http.post<string>(this.starsBaseUrl + this.starsUrlMakeSeenStars, null, {
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
    //this.messageService.addLog('StarService: ' + message);
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
