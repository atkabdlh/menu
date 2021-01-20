import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from '../item.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  public list: Item[] = [];
  public selectedList: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItemList();
  }

  getItemList(): void {
    this.itemService.getItems().subscribe((res) => {
      this.list = res.map((item) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as Item
        };
      });
    });
  }

  deleteItem(itemId) {
    this.itemService.deleteItem(itemId).then();
  }

  select(item) {
    const newItem: Item = {
      id: item.id,
      itemName: item.itemName,
      itemDesc: item.itemDesc,
      price: item.price,
      selected: item.selected
    };
    if (item.selected === true) {
      newItem.selected = false;
    } else {
      newItem.selected = true;
    }
    this.itemService.editItem(item.id, newItem).then();
    console.log(newItem);
  }
}
