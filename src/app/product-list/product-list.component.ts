import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  cart: number = 1

  product = {
    name: "iphone 13",
    imgUrl: "https://cdn.myshoptet.com/usr/www.cesky-mobil.cz/user/shop/big/156955-4_apple-iphone-13.jpg",
    price: 100,
    color: "red",
    discount: 14.33,
    stock: 1,
    
  }
  
  getDiscount(){
    return (this.product.price -(this.product.price * this.product.discount / 100))
  }

  setName(event: any){
    
    this.product.name = event.target.value;
    
  }

  incrementCart(){
    this.cart = this.cart+1;
  }
  decrementCart(){
    this.cart = this.cart-1;
  }

}
