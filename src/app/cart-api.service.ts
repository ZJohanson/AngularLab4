import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item'
@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  constructor(private httpClient: HttpClient) { }
  serverAddress: string = "http://localhost:3000/cart-items"
  getAllItems(){
    return this.httpClient.get(this.serverAddress);
  }
  deleteItem(id:number){
    return this.httpClient.delete(`${this.serverAddress}/${id}`);
  }
  addItem(item:Item){
    return this.httpClient.post(this.serverAddress, item);
  }
}
