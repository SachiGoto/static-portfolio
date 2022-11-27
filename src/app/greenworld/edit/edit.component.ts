import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import{Product} from '../interface/products.interface.ts';
import{ServiceService} from '../services/service.service';
import{Router} from '@angular/router';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class GreenEditComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http:ServiceService, private router:Router) { }

  title:string ="";
  description:string="";
  originalPrice:any="";
  price:any="";
  imageFront:string="";
  imageBack:string ="";
  stock:string="";
  // stockAvail:boolean=true;
  display:string="ofline";


  // product:Product;

  // update(){
  //   // let id = localStorage.getItem("photoUserID");
  //   let id:any = this.route.snapshot.paramMap.get("id");

  // this.http.updateUser(id, this.imageFront, this.imageBack, this.title,this.description,this.originalPrice, this.price, this.stock, this.display).subscribe(updateConfirmation=>{
  //   console.log("updateData has " , updateConfirmation);
  //   console.log(this.title);
  //   console.log(this.price);
  //   console.log(id);
  //   // this.updatestatus = updateConfirmation.update;
  //   // this.showMessage = "block";
  //   if(updateConfirmation.update){
  //   this.router.navigate(['/admin']);
  //   }
   //  console.log("works");


  // })

// }

//   deleteUser(){

//     if(confirm("Are you sure?")){
//       // let userID = localStorage.getItem("photoUserID");
//       let id:any = this.route.snapshot.paramMap.get("id");
//       this.http.deleteUser(id).subscribe(response =>{
//         console.log(response);
//         if(response.deleteUser){
//           // localStorage.setItem("photoUserID", "0");
//           // this.router.navigate(['/signUp']);
//           console.log("deleted");
//           this.router.navigate(['/admin']);

//         }else{
//           console.log("didn't get deleted")
//         }


//       })


//   }





//   }




  ngOnInit(): void {

//     let id:any = this.route.snapshot.paramMap.get("id");
//     console.log(id);

//     this.http.getProductById(id).subscribe(item=>{
//       this.product = item;
//       // console.log(this.product);
//       console.log(this.product.title);
//       console.log(this.stock);
//       // console.log(this.product.description);
//       this.title = this.product.title;
//       this.description = this.product.description;
//       this.originalPrice = this.product.originalPrice;
//       this.price = this.product.price;
//       this.imageFront = this.product.imageFront;
//      this.imageBack = this.product.imageBack;
//       this.stock = this.product.stock;



//     })
  }

}
