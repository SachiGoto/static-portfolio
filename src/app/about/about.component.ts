import { Component, OnInit } from '@angular/core';
import { Education, Skill } from '../interface';
import{CommonService} from '../service/common.service';
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';







@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {

  constructor(private http:CommonService, private meta:Meta, private titleService:Title) {
    titleService.setTitle("Sachi Goto - About pagge")

    this.meta.updateTag(
      {name:"title", content:"Sachi Goto - About page."},
      
     
    )
    this.meta.updateTag(
      {name:"description", content:"I am a full stack web developer based in Vancouver. I graduated from VanArts Web Development and Interactive Design program in 2022 and am interested in Front and Back End web development opportunities. "}
    )
  }

  fullbio:any;
  headshotAltText:string='';
  resume:string='https://res.cloudinary.com/vanarts-webdev/image/upload/v1664231494/sachigoto_resume_70ac4dc54f.pdf';

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






