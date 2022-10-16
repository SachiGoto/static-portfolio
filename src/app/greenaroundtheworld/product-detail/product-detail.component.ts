import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{Products} from '../interfaces/interface';
import {CommonService} from '../service/common.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class GreenProductDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private serverHttp:CommonService) { };
  products:Products;
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
    let productID:any = this.route.snapshot.paramMap.get("id");
    // get("id") the router name "id".

    this.serverHttp.getProductById(productID).subscribe(product =>{
      this.products = product.data;

      console.log("product detail;" , this.products)


    })
  }

}
