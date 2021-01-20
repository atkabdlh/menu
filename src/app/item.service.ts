import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private firestore: AngularFirestore) { }

  createItem(payload: Item) {
    return this.firestore.collection('items').add(payload);
  }

  getItems() {
    return this.firestore.collection('items').snapshotChanges();
  }

  deleteItem(itemId: string) {
    return this.firestore.doc('items/' + itemId).delete();
  }

  editItem(itemId: string, payload: Item) {
    console.log(payload);
    return this.firestore.doc('items/' + itemId).update(payload);
  }

  getSelected() {
    return this.firestore.collection('items', ref => ref.where('selected', '==', true)).snapshotChanges();
  }
}

export interface Item {
  id?: string;
  itemName: string;
  itemDesc: string;
  price: string;
  selected: boolean;
}
