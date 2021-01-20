import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
  itemForm = new FormGroup({
      itemName: new FormControl(''),
      itemDesc: new FormControl(''),
      price: new FormControl('')
  });

  constructor(private itemService: ItemService) { }

  reset() {
    this.itemForm.reset();
  }

  addItem(value) {
    value.selected = false;
    console.log(value);
    this.itemService.createItem(value);
    this.reset();
  }

  ngOnInit(): void {
  }

}
