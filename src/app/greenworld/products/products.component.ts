import { Component, OnInit } from '@angular/core';
// import {Product} from '../interface/products.interface.ts'
import{ServiceService} from '../services/service.service'
import{Products} from '../interface/products.interface.ts';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class GreenProductsComponent implements OnInit {
  // products:Products[]=[];
  products:any=[];
  constructor(private serviceHttp:ServiceService, private http:HttpClient) { }


  // availability:string='';

  // stockStatus(event:any){

    // if(event.type === "change"){

    //   let status = this.availability=event.target.value;
    //   // console.log(this.productList)
    //   if(status == "AvailableOnly"){
    //     this.products.forEach(item =>{
    //       if(item.stockAvail === false){
    //         item.display = false
    //       }
    //     })
    //     // return true;
    //   }else{
    //     this.products.forEach(item => {
    //       item.display = true;
    //     })
    //   }



    // }

    // return false;

    // this.availability=event.target.value;
    // console.log(this.availability=event.target.value);
    // let status = this.availability=event.target.value;

    // if(status == "AvailableOnly")
    //         return true;
    //   console.log(document.querySelector(".itemDisplay"))
    //      for(let i =0; i < this.products.length ; i++){
    //        if(this.products[i].stockAvail === false){

    //        }
    //      }
    //     return true;
    // else
    // return false








  ngOnInit(): void {

    this.http.get('../../../assets/greenImg/product.json').subscribe((res)=>{
         this.products =res;
         this.products = this.products.data
    })

    // this.serviceHttp.getAllProducts().subscribe(item=>{
    //   this.products = item.data

    //   console.log(this.products);
    // })
  }

}
