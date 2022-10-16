import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Aboutpage, Homepage, Products, NewProduct, Login} from '../interfaces/interface';
// import{NewProduct} from '../interface/newproducts.interface'
// import { Login } from '../interface/login.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  productUrl = "https://cms.sachigoto.me/api/green-products?populate=deep";
  productbyIdUrl = "https://cms.sachigoto.me/api/green-products/";

  homepageUrl = "https://cms.sachigoto.me/api/green-homepage?populate=deep";
  aboutpageUrl = "https://cms.sachigoto.me/api/green-aboutpage?populate=deep";

  constructor(private clientHttp:HttpClient) { }

  gethomepage(){
    return this.clientHttp.get<{data:Homepage}>(this.homepageUrl)
  }

  getProductById(id:number){
    // return this.clientHttp.get<Product>(this.productUrl + "/" + id);
    return this.clientHttp.get<{ data: Products }>(this.productbyIdUrl + id + "?populate=deep")
  }

  // private allProductUrl = this.server + "allProducts";

  getAllProducts(){
    return this.clientHttp.get<{data:Products[]}>(this.productUrl);
  }

  getAboutpage(){
    return this.clientHttp.get<{data:Aboutpage}>(this.aboutpageUrl);
  }





private loginURL = "https://cms.sachigoto.me/api/auth/local";

loginService(data:any){


return this.clientHttp.post<{jwt:string}>(this.loginURL, data);
}

}
