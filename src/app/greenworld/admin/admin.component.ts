import { Component, OnInit } from '@angular/core';
import{ServiceService} from '../services/service.service';
import{Router} from '@angular/router';
import{Product} from '../interface/products.interface.ts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class GreenAdminComponent implements OnInit {

  constructor(private http:ServiceService, private router:Router,private route:ActivatedRoute) { }

  user_name:string='';
  password:string='';
  loginStatus = true;

  products:Product[]=[];



  ngOnInit(): void {
  //  this.http.getAllProducts().subscribe(item=>{
  //     // this.products = item
  //   })

  }

}
