import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import {CommonService} from '../service/common.service';
import {gsap} from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class GreenAboutComponent implements OnInit {

  constructor(private http:CommonService) { }

  heroImage='';
  title='';
  aboutus='';
  ourmission='';
  whyzerowaste='';
  whyZeroWaste='';
  image='';


  ngOnInit(): void {

    this.http.getAboutpage().subscribe(res=>{
      this.heroImage = res.data.attributes.HeroImage.data.attributes.formats.large.url;
      this.title=res.data.attributes.Title;
      this.aboutus = res.data.attributes.aboutus;
      this.ourmission = res.data.attributes.ourmission;
      this.whyzerowaste = res.data.attributes.whyzerowaste;
      this.whyZeroWaste = res.data.attributes.whyZeroWaste;
      this.image = res.data.attributes.image.data.attributes.formats.large.url;
      console.log(res);
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
   start: '-100px center',
   end: 'bottom bottom',
   markers: false,
   toggleActions: 'play none none reverse',
 },
});
scrollBox.from(container, { y: 100, opacity: 0, duration:2});
});
}
  }


