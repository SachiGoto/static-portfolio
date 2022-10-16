import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetail, Projects } from '../interface';
import { CommonService } from '../service/common.service';
import { environment } from 'src/environments/environment';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as Aos from 'aos';
import { HttpClient } from '@angular/common/http'



// import AOS from 'aos';







@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})




export class ProjectDetailsComponent implements OnInit {


  // private observer:IntersectionObserver;

  constructor(private route:ActivatedRoute, private hp:HttpClient, private http:CommonService) {}
  // project:ProjectDetail;
//  project:ProjectDetail;

 project:any;





server = environment.server;

// websiteHeroImage='';

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

  //  console.log("project json " , this.http.getJson);

  //  this.projectJson = this.http.getJson()



  //  this.http.getAboutMe().subscribe(res=>{

  //  })
  //  this.projectJson = this.http.getJson



    window.scrollTo(0,0);
    // AOS.init()
    let id:any= this.route.snapshot.paramMap.get("projectID");
    let slug:any = this.route.snapshot.paramMap.get("slug")
//     this.http.getProjectById(id).subscribe(project=>{
// this.project = project.data;

//     })
this.hp.get('assets/projects.json').subscribe((res)=>{
  this.project = res
  this.project = this.project.data[id-1];
  console.log(this.project.data[id-1]);
  console.log("category is ", this.project.data.attributes.Category)

 })


  Aos.init();

// gsap.registerPlugin(ScrollTrigger);

  // this.http.getAboutMe().subscribe(res=>{
  //   console.log(res);
  //   // better make an interface so that I can see what is in the data.
  //   this.websiteHeroImage = environment.server + res.data.attributes.WebsiteHeroImage.data.attributes.url;

  //   console.log("webstieImage" , this.websiteHeroImage);



  // })




  //   const elementToTrack = document.getElementById("test")

  //   const observer = new IntersectionObserver((entries)=>{
  //     entries.forEach(entry => {
  //       console.log("Intersecting : " , entry.isIntersecting)
  //   })
  // })





}

selected = false;

ngAfterViewChecked(){
  const container = document.querySelector(".imagecontainer")
  const titleContainer = document.querySelector(".titleContainer")
  if(!this.selected && container){
  console.log(container, titleContainer)
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

// skillContainer(){
//   // console.log('works')
//   const titleContainer = document.querySelector(".developmentContainer")
//   // console.log(titleContainer)
//   const imageContinaer = document.querySelector(".imagecontainer")
// console.log(titleContainer)
//     const scrollBox = gsap.timeline({
//       scrollTrigger: {
//         trigger: imageContinaer,
//         pin: false,
//         start: '2000px center',
//         end: '2500px bottom',
//         markers: true,
//         toggleActions: 'play none none reverse',
//       },
//     });
//     scrollBox.from(titleContainer, { opacity: 0, duration:2});

// }



//       //  let websitepages = angular.element(document.querySelectorAll(".image"));
//    let websitepages = document.querySelectorAll(".image");
//    console.log(websitepages);
//       const options = {
//         root:null, // it is the viewport
//         threshold:0,  // 0 to 1 scale. if it's 1, 100 percent of the content needs to be in viewport to fire the function. 0.25 means 25% of specified content.

//         rootMargin: "-200px", // pull margin to certain amount to change the firing point. if it's 150px, 150px below the top page will be the trigger point. It has to be either % or px.

//       };

//        // every time, the specified section is intersected (touch the top of the page), function gets triggered.
//        const observer = new IntersectionObserver(function(entries, oberver){
//         entries.forEach(entry=>{
//           console.log(entry);
//           if(entry.isIntersecting)
//           entry.target.classList.add('show');

//           else{
//             entry.target.classList.remove('show');
//           }

//           // observer.unobserve(entry.target);  // observe only once.  - useful for lazy loading
//         })
//       }, options);

//       websitepages.forEach(pages=>{
//       observer.observe(pages);
//     })


//     // observer.observe(websitepages);








  // }

