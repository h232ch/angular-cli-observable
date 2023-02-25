import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Item } from './item';

@Injectable()
export class ItemService {

  public $visible = new Subject<Item>();

  constructor() { }

}
