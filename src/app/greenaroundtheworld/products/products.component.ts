import { Component, OnInit } from '@angular/core';
import {CommonService} from '../service/common.service';
import{Products} from '../interfaces/interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class GreenProductsComponent implements OnInit {

  constructor(private serviceHttp:CommonService) { }
  products:Products[]=[];

  ngOnInit(): void {
    this.serviceHttp.getAllProducts().subscribe(item=>{
      this.products = item.data

      console.log(this.products);
    })

  }

}
