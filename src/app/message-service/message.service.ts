import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
 messages: string[] = [];

 addLog(message: string) {
   this.messages.push(message);
 }

 clear() {
   this.messages.length = 0;
 }
}