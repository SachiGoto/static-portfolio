import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {CommonService} from '../service/common.service'
import {Education} from '../interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // websiteHeroImage ='';
  name='';

  constructor(private http:CommonService, private route:Router) { }

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
