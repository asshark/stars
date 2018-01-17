import { Component, OnInit, Input } from '@angular/core';
import { StarService } from '../../star-service/star.service';

@Component({
  selector: 'app-star-deleting',
  templateUrl: './star-deleting.component.html',
  styleUrls: ['./star-deleting.component.css']
})
export class StarDeletingComponent implements OnInit {

  @Input() item: any;
  @Input() itemParent: any;
  @Input() items: any[];

  constructor(private starService: StarService) { }

  ngOnInit() {
  }

  remove()
  {
    console.log("item removed");
    this.starService.deleteItem(this.itemParent, this.item);
    if(this.items)
    {
      var index = this.items.indexOf(this.item, 0);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
  }
}
