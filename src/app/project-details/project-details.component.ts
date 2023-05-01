import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetail, Projects } from '../interface';
import { CommonService } from '../service/common.service';
import { environment } from 'src/environments/environment';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as Aos from 'aos';
import { HttpClient } from '@angular/common/http'
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})


export class ProjectDetailsComponent implements OnInit {
  // private observer:IntersectionObserver;

  constructor(private route:ActivatedRoute, private hp:HttpClient, private http:CommonService, private titleService:Title,private meta:Meta) {

    titleService.setTitle("Sachi Goto - Project detail pagge")

    this.meta.updateTag(
      {name:"description", content:"My projects include a WordPress site, a Full-stack e-commerce site made with Angular, A static website with HTML, CSS, Javascript and GSAP, and a To-do list app made with MVC, Node.js, Express. Skills: HTML | CSS | Saas | Bootstrap | JavaScript | Typescript | Angular | DevOp | MongoDB | MySQL | Microservices | WordPress | PHP | SEO | Illustrator | Photoshop | Agile/Scrum | Project management| Illustrator | Photoshop | Figma "},
     
    )

    this.meta.updateTag(
      {name:"title" , content:"Sachi Goto - Project Details"}
    )
  }
 project:any;

server = environment.server;

scrollup(){
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}



scrollTo(summary:any){


  summary.scrollIntoView({
  behavior: "smooth",
  block:"center",
  inline: "start"
});
}



  ngOnInit(): void {

    window.scrollTo(0,0);
    let id:any= this.route.snapshot.paramMap.get("projectID");
 
    let slug:any = this.route.snapshot.paramMap.get("slug");

this.hp.get('assets/projects.json').subscribe((res)=>{
  this.project = res;
  console.log(this.project.data)
  for(let i=0; i<this.project.data.length; i++){
    console.log('id ', id, this.project.data[i].id)
    console.log(this.project.data[i].id == id)
    if(this.project.data[i].id == id){
      this.project = this.project.data[i]
    }
      // console.log('hello')
  }
  // for(const item in this.project.data.attributes){
  //        console.log('item is ' , item)
  // }
  // if(this.project.data.id === id){
  //   this.project = this.project.data.attributes
  // }
  

  // console.log(this.project.data[id-1]);
  // console.log("category is ", this.project.data.attributes.Category)


 })


  Aos.init();


}

selected = false;



ngAfterViewChecked(){
  const mobileScreen = window.matchMedia("(min-width: 768px)");
  // console.log(mobileScreen.matches)
  const container = document.querySelector(".imagecontainer")
  const titleContainer = document.querySelector(".devtitleContainer")
  if(mobileScreen.matches === true){
    if(!this.selected && container){
      // console.log(container, titleContainer)
      this.selected = true
      const scrollBox = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: false,
          start: '-200 center',
          end: '0 bottom',
          markers: false,
          toggleActions: 'play none none reverse',
        },
      });
      scrollBox.to(titleContainer, { opacity: 0, duration:.5});
    
        }
    
  }



}

}

