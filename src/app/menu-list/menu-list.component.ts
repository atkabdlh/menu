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
          ...item.payload.doc.data(),
          id: item.payload.doc.id
        } as Item;
      });
    });
  }

  deleteItem(itemId) {
    this.itemService.deleteItem(itemId).then();
  }

  select(item) {
    let newItem = {};
    console.log(item);
    newItem.id = item.id;
    newItem.itemName = item.itemName;
    newItem.itemDesc = item.itemDesc;
    newItem.price = item.price;
    if (item.selected == true) {
      newItem.selected = false;
    } else {
      newItem.selected = true;
    }
    this.itemService.editItem(item.id, newItem).then();
    console.log(newItem);
  }
}
