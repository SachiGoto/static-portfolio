import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {CommonService} from '../service/common.service'
import {Education} from '../interface';
import { ActivatedRoute, Router } from '@angular/router';
import {Meta} from '@angular/platform-browser'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // websiteHeroImage ='';
  name='';

  constructor(private http:CommonService, private route:Router, private meta:Meta, private titleService:Title) { 
    titleService.setTitle("Sachi Goto |  Full-stack software developer based in Vancouver, Canada")

    this.meta.updateTag(
      {name :"description", content:"Bilingual full stack developer excited about all things JavaScript. As a recent graduate and freelancer, I love to build efficient applications and solve front- and backend challenges. I'm interested in technological innovation to build a more sustainable and equitable world."},
     
    )

    this.meta.updateTag(
      {name:"title" , content:"Sachi Goto | Full-stack software developer based in Vancouver, Canada"}
    )
  }

state = false;



translate(){

this.state = true;
console.log();

setTimeout(()=>{

    this.route.navigate(["about-me"]);

}, 3000)

}

toProjects(){
  this.route.navigate(["/projects"]);
}

  ngOnInit(): void {
  }

}
