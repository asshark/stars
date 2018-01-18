import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message-service/message.service';
import { AppRoutingModule } from './/app-routing.module';


import { StarSearchComponent } from './star-search/star-search.component'

import { CookieService } from 'ngx-cookie-service';

import { StarReportComponent } from './star-report/star-report.component';

import { CoreModule }       from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CoreModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MessagesComponent,
    StarSearchComponent, StarReportComponent
  ],

  providers: [MessageService, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
