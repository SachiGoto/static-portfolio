import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import {ServiceService} from '../services/service.service';
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class GreenAboutComponent implements OnInit {

  constructor(private http:ServiceService, private hp:HttpClient) { }

  heroImage='';
  // title='';


  // whyzerowaste='';
  // whyZeroWaste='';

  aboutJson:any;

  ngOnInit(): void {

    this.hp.get('assets/about.json').subscribe((res)=>{
      this.aboutJson = res;
      this.heroImage = this.aboutJson.data.attributes.HeroImage.data.attributes.formats.large.url;

    })

    Aos.init();

    gsap.registerPlugin(ScrollTrigger, Draggable);

    this.box();

  }

  box() {
    document.querySelectorAll('.box').forEach(container=>{

     const scrollBox = gsap.timeline({
       scrollTrigger: {
         trigger: container,
         pin: false,
        //  start: '-20px center',
         end: 'bottom bottom',
         markers: false,
         toggleActions: 'play none none reverse',
       },
     });
     scrollBox.from(container, { y: 100, opacity: 0, duration:2});
   });
   }



}
