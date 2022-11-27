import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import{NewProduct} from '../interface/newproducts.interface';
import{ServiceService} from '../services/service.service';
import{Router} from '@angular/router'



@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss']
})
export class GreenNewproductComponent implements OnInit {

  constructor( private http:ServiceService, private router:Router) { }
  // productID:number;

  // imageFrontAlt:string;
  // imageBackAlt:string;
  title:string ="";
  description:string="";
  originalPrice:any="";
  price:any="";
  imageFront:string="";
  imageBack:string ="";
  stock:string="";
  // stockAvail:boolean=true;
  display:string="";

  addNew(){

    // this.http.addNewService(this.imageFront, this.imageBack,this.title, this.description, this.originalPrice, this.price, this.stock, this.display).subscribe(newProduct=>{
    //        console.log(this.imageBack);
    //        console.log(this.imageFront);
    //        console.log(this.title);
    //        console.log(this.description);
    //        console.log(this.originalPrice);
    //        console.log(this.price);
    //        console.log(this.stock);
    //        console.log(this.display);
    //        console.log(newProduct.addNewProducts);
    //        if(newProduct.addNewProducts){
    //        this.router.navigate(['/admin']);
            // this.registration = signUpData.signUp
//
    //        }else{
    //          console.log(newProduct.addNewProducts);
    //        }
    // });

  }

  ngOnInit(): void {
  }

}
