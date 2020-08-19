import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CartApiService } from '../cart-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private API: CartApiService) { }
  
  cartItems: Item[]

  ngOnInit(): void {
    this.API.getAllItems().subscribe((Response: Item[])=>{
      this.cartItems=Response
    })
  }
  onSubmit(newProduct: NgForm){
    let product: Item = {product: newProduct.value.product, price: newProduct.value.price, quantity: newProduct.value.quantity};
    this.API.addItem(product).subscribe((Response: Item)=>{
      console.log(Response);
    })
    this.API.getAllItems().subscribe((Response: Item[])=>{
      this.cartItems=Response;
    })
  }
  onDelete(id: number){
    this.API.deleteItem(id).subscribe((Response: Item)=>{
      console.log(Response);
    })
    this.API.getAllItems().subscribe((Response: Item[])=>{
      this.cartItems=Response;
    })
  }
}
