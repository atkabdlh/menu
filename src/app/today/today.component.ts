import { Component, OnInit } from '@angular/core';
import {Item, ItemService} from '../item.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  public list: Item[] = [];
  public selectedList: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItemList();
  }

  getItemList(): void {
    this.itemService.getSelected().subscribe((res) => {
      this.list = res.map((item) => {
        return {
          ...item.payload.doc.data(),
          id: item.payload.doc.id
        } as Item;
      });
    });
  }

}
