import { Component, OnInit } from '@angular/core';
import { Education, Skill } from '../interface';
import{CommonService} from '../service/common.service';
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";







@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {

  constructor(private http:CommonService) {
  }
  fullbio:any;
  headshotAltText:string='';
  resume:string='';

  skills:Skill[]=[]
  designSkills:any =[];
  frontendSkills:any =[];
  backendSkills:any=[];
  temp:any=[];

  education:Education[]=[];

  lang:string="English";

  changeLang(){
    if(this.lang=="English"){

      this.lang = "Japanese"

    }else{
      this.lang = "English";
    }
  }





  ngOnInit(): void {

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }


        gsap.registerPlugin(ScrollTrigger, Draggable);
        this.fadeinContainer();


  }

  fadeinContainer() {
    document.querySelectorAll('.fadeinSubContainer').forEach(container=>{

     const scrollBox = gsap.timeline({
       scrollTrigger: {
         trigger: container,
         pin: false,
         start: '-250px center',
        //  end: 'top top',
         markers: false,
         toggleActions: 'play none none reverse',
       },
     });
     scrollBox.from(container, { y: 150, opacity: 0, duration:2});
   });
   }


}






