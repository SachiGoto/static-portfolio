import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectDetail, Projects } from '../interface';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import { HttpClient } from '@angular/common/http';


gsap.registerPlugin(ScrollTrigger, Draggable);
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
// projects:ProjectDetail[]=[];
websiteHeroImage ='';

projectJson:any;

state=false;

server = environment.server;


  constructor(private cs:CommonService, private route:Router, private http:HttpClient) { }

  translate(id:number, slug:any){

    this.state = true;
    console.log();



    setTimeout(()=>{

        this.route.navigate(['/projects/' + id + '/' + slug]);

    }, 3000)




    }


  ngOnInit(): void {

    this.http.get('assets/projects.json').subscribe((res)=>{
      this.projectJson = res
      this.projectJson = this.projectJson.data;
      console.log(this.projectJson);
      // console.log("category is ", this.projectJson.attributes.Category)

     })

  // window.onbeforeunload = function () {
  //     window.scrollTo(0, 0);
  //   }

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

    // this.cs.getProjects().subscribe(res=>{
    //      this.projects = res.data;
    //      console.log("project data" , res.data);
    //   }
    // )

    // this.cs.getAboutMe().subscribe(res=>{
    //   console.log(res);
    //   // better make an interface so that I can see what is in the data.
    //   // this.websiteHeroImage = environment.server + res.data.attributes.WebsiteHeroImage.data.attributes.url;
    //   this.websiteHeroImage = res.data.attributes.WebsiteHeroImage.data.attributes.url;

    //   console.log(this.websiteHeroImage);


    // })

    // this.skillContainer();
    gsap.registerPlugin(ScrollTrigger);


  }

//   selected = false;

// ngAfterViewChecked(){
//   // const container = document.getElementById("projectContainer");
//   // console.log(container);

// let sections = gsap.utils.toArray(".project");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".projectContainer",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=3500",
//   }
// });





//   //   }



// }



//   skillContainer(){




//     let sections = gsap.utils.toArray(".project");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".projectContainer",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=3500",
//   }
// });



// }

}
