import { Time } from "@angular/common/src/i18n/locale_data_api";

export class Clip {
    starid: string;
    name: string;
    rank: number;
    tags: string[];
    studio: string;
    series: string;
    description: string;
    img: string;
    url: string;
    addeddt:Date;
    modifieddt:Date;
    lastseendt:Date;
    size: number;
    place: string;
    horse: number;
  }