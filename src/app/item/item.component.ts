import {Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Item} from '../item';
import {ItemService} from '../item.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy, OnChanges {

  @Input() item: Item;
  private itemSubscription: Subscription;

  constructor(private itemService: ItemService) {
  }

  ngOnChanges(changes: SimpleChanges): void {

    }

  ngOnInit() {
    this.itemSubscription = this.itemService.$visible.subscribe((item: Item) => {
      this.item.isVisible = item.title === this.item.title;
      console.log("item.title : " + item.title + " == " + "this.item.title : " + this.item.title)
    })
  }

  ngOnDestroy() {
    if (this.itemSubscription) {
      this.itemSubscription.unsubscribe();
    }
  }

  toggle() {
    this.itemService.$visible.next(this.item);
  }
}
