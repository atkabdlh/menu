import { Component, OnInit } from '@angular/core';
import {Item, ItemService} from '../item.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  public list: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItemList();
  }

  getItemList(): void {
    this.itemService.getSelected().subscribe((res) => {
      this.list = res.map((item) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as Item
        };
      });
    });
  }

}
