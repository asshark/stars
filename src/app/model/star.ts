export class Star {
    id: string;
    name: string;
    rank: number;
    tags: string[];
    dob: Date;
    gender: string;
    img: string;
    country: string;
    knownas: string[];
    worksfor: string[];
    clips: number;
    visible: boolean;
    addeddt: Date;
    modifieddt: Date;
    lastseendt:Date;
    hair: string;
    tatoo: string;
    breast: string;
    pussy: string;
    description: string;
    horse: number;

    constructor(  id: string,
      name: string,
      rank: number,
      tags: string[],
      dob: Date,
      gender: string,
      img: string,
      country: string,
      knownas: string[],
      worksfor: string[],
      clips: number,
      visible: boolean,
      addeddt: Date,
      moddt: Date,
      hair: string,
      tatoo: string,
      breast: string,
      pussy: string,)
    {
      this.id = id;
    }
  }