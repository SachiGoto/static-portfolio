import { Component, OnInit } from '@angular/core';
import {CommonService} from '../service/common.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'MyPortfolio';
  logo ='';
  state:boolean=false;
  activestate:boolean=false;
  logoAltText = '';

  server = environment.server;
  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    // this.cs.getAboutMe().subscribe(res=>{

    //   this.logo = res.data.attributes.Logo.data.attributes.url;
    //   this.logoAltText = res.data.attributes.Logo.data.attributes.alternativeText;

    // })
  }


  toggleNav() {
    // let overlay =
   this.state = !this.state;
   this.activestate =!this.activestate;

    let overlay = document.getElementById("overlay")

  }

}
