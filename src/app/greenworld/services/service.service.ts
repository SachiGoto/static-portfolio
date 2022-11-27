import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Aboutpage, Homepage, Products} from '../interface/products.interface.ts'
import{NewProduct} from '../interface/newproducts.interface'
import { Login } from '../interface/login.interface';
// import { ThisReceiver } from '@angular/compiler';
// import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // private server = environment.server;
  // private productUrl = this.server + "products";
  // productUrl = "https://cms.sachigoto.me/api/green-products?populate=deep";
  // productbyIdUrl = "https://cms.sachigoto.me/api/green-products/";

  // homepageUrl = "https://cms.sachigoto.me/api/green-homepage?populate=deep";
  // aboutpageUrl = "https://cms.sachigoto.me/api/green-aboutpage?populate=deep"

  constructor(private clientHttp:HttpClient) { }

  // getOnlinelProducts(){
  //   return this.clientHttp.get<Products[]>(this.productUrl);
  // }

  // gethomepage(){
  //   return this.clientHttp.get<{data:Homepage}>(this.homepageUrl)
  // }

  // getProductById(id:number){
  //   // return this.clientHttp.get<Product>(this.productUrl + "/" + id);
  //   return this.clientHttp.get<{ data: Products }>(this.productbyIdUrl + id + "?populate=deep")
  // }

  // // private allProductUrl = this.server + "allProducts";

  // getAllProducts(){
  //   return this.clientHttp.get<{data:Products[]}>(this.productUrl);
  // }

  // getAboutpage(){
  //   return this.clientHttp.get<{data:Aboutpage}>(this.aboutpageUrl);
  // }





// private loginURL = "https://cms.sachigoto.me/api/auth/local";

// loginService(data:any){


// return this.clientHttp.post<{jwt:string}>(this.loginURL, data);
// }



// private addNewUrl = this.server + "newProducts"

// addNewService(imageFront:string, imageBack:string, title:string, description:string, original_price:any, price:any, stock:string, display:string){

//   let addNewBody={

//     imageFront: imageFront,
//     imageBack: imageBack,
//      title: title,
//      description: description,
//      original_price: original_price,
//      price : price,
//     stock: stock,
//     display: display

// }
// return this.clientHttp.post<{message:string, addNewProducts:boolean}>(this.addNewUrl, addNewBody);
// }



// private updateURL = this.server + "update";
// // neeed to match with the end point
// updateUser(id:number, imageFront:string, imageBack:string, title:string, description:string, original_price:any, price:any, stock:string, display:string){
//     let updateBody={
//       id:id,
//       imageFront: imageFront,
//       imageBack:imageBack,
//       title:title,
//       description:description,
//       original_price:original_price,
//       price:price,
//       stock:stock,
//       display:display

//     }
//     // the structure needs to match with the one you used for testing
//     console.log("works");
//     // console.log(updateBody);
//     return this.clientHttp.put<{message:any,update:boolean}>(this.updateURL, updateBody);
//     // updateBody - include information you want to pass
//     // need to pass two arguments. 1 - endpoint 2- body
//     // include type casting

// }


// private deleteURL = this.server + "deleteproduct";



// deleteUser(id:any){
//     return this.clientHttp.delete<{deleteUser:boolean, message:any}>(this.deleteURL + "/" + id);
// }








}


