import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Star } from '../model/star';
import { Clip } from '../model/clip';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StarService }  from '../star-service/star.service';
import { MessageService } from '../message-service/message.service';

@Component({
  selector: 'app-star-detail',
  templateUrl: './star-detail.component.html',
  styleUrls: ['./star-detail.component.css']
})
export class StarDetailComponent implements OnInit {

  @Input() selectedStar: Star;
  selectedStarClips: Clip[];
  imgUrl: string;

  constructor(
    private route: ActivatedRoute,
    private starService: StarService,
    private location: Location,
    private messageService: MessageService
  ) 
  { 

  }

  ngOnInit(): void {
    this.getStar();
  }

  getStar(): void {
    var id = this.route.snapshot.paramMap.get('id');
    this.selectedStar = this.starService.getStar(id);
    this.imgUrl = "./assets/img/stars/" + this.selectedStar.id + ".png";
    this.starService.getStarClips(id).subscribe(clips => {this.selectedStarClips = clips});
    console.log(`selectedStar is = ${this.selectedStar.name}`);
  }

  goBack(): void {
    this.location.back();
  }
}
