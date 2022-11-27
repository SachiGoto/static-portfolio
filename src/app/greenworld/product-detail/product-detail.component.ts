import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../interface/products.interface.ts';
import {ServiceService } from '../services/service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class GreenProductDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private serverHttp:ServiceService, private http:HttpClient) { }

  // products:Products;
  products:any;
  number=1;

  minus(){

    // console.log(number);
    this.number--;
    console.log(this.number);

  }

  plus(){
    this.number++;

  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    let productID:any = this.route.snapshot.paramMap.get("id");
    // get("id") the router name "id".

    this.http.get('assets/greenImg/product.json').subscribe((res)=>{
      this.products =res;
      this.products = this.products.data[productID-1];
      // this.products = this.products[productID]
 })

    // this.serverHttp.getProductById(productID).subscribe(product =>{
    //   this.products = product.data;

    //   console.log("product detail;" , this.products)


    // })
  }

}
