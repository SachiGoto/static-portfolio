import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { start } from '@popperjs/core';
// import { kwesforms } from 'kwesforms';
import { CommonService } from '../service/common.service';
import { FormControl } from '@angular/forms';
// import * as kwesforms from 'kwesforms';

// import * as Aos from 'aos';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor( private http:CommonService) { }



  // const kwesforms = require('kwesforms');

  name='';
  email='';
  message='';
  formInvalid = true;
  websiteHeroImage='';
  emailIcon ='';
  linkedinIcon='';
  instagramIcon ='';
  aboutme:any;
 component = "contact"



  formMessageHidden = true;



  submitLead(){
    console.log("Hello");
    this.formInvalid = true;
 let leaddata = {

        "name": this.name,
        "email": this.email,
        "message":this.message

    }

    // let leaddata = {
    //   "data":{
    //     "name": this.name,
    //     "email": this.email,
    //     "message":this.message
    //   }
    // }

    // let kwesScript = document.createElement('script')

    // kwesScript.setAttribute('src', 'https://kwes.io/js/kwes.js')

    // document.head.appendChild(kwesScript)

    // this.http.postlead(leaddata).subscribe(res=>{
    //   console.log(res);
    //   this.formMessageHidden = false;

    this.http.postlead(leaddata).subscribe(res=>{
      this.formMessageHidden = false;
      console.log("res is " , res);
    })





    // })

    // console.log(leaddata);

    this.name='';
  this.email='';
  this.message='';





  }



  resolved(event:any){
      // console.log(event);
      if(event){
        this.formInvalid = false;
      }
  }








  ngOnInit(): void {

    // kwesforms.init();

    // let kwesScript = document.createElement('script')

    // kwesScript.setAttribute('src', 'https://kwes.io/js/kwes.js')

    // document.head.appendChild(kwesScript)



    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }


  //   let getDivState = () => {
  //     let currentState = { width: document.body.clientWidth,
  //                          height: document.body.clientHeight
  //                        }
  //   return currentState;
  // }




  //     let getRanNum = (min:any, max:any) => {
  //       let draw;
  //       do {
  //         draw = Math.floor(Math.random() * max);
  //       } while (draw > max || draw < min)
  //       return draw;
  //     }

  //     let starContainer = document.createElement("div");

  //     // starContainer.className = "starContainer";
  //     starContainer.style.height = "100vh";
  //     starContainer.style.position = "absolute";
  //     starContainer.style.width = "100%";
  //     starContainer.style.top = "0";
  //     document.body.appendChild(starContainer);

  //     // let createStars = () => {

  //     let stars = getDivState().width / 50 ;  // the mass of the stars

  //     for (let i=1; i<=stars; i++) { // create stars limit by screen size
  //       let star = document.createElement("div");

  //       star.className = "star";
  //       let sizeOfStar = getRanNum(5, 7);
  //       star.style.borderRadius = "10px";
  //       star.style.position = "absolute";
  //       star.style.animation = "twinkle 3s infinite";
  //       star.style.backgroundColor = "rgb(232, 248, 167)"
  //       // star.style.filter.blink = "10px";
  //       star.style.width = sizeOfStar + "px";
  //       star.style.height = sizeOfStar + "px";
  //       // star.style.height = Math.floor(Math.random()*10 + 1) + "vh";
  //       star.style.left= getRanNum(0, getDivState().width) +"px";
  //       star.style.top= Math.floor(Math.random()*25 + 1) + "vh";
  //       star.style.animationDuration= getRanNum(3, 8) + "s";
  //       // star.style.backgroundColor="yellow";
  //       starContainer.appendChild(star);
  //     }

  //   // }

    // this.http.getAboutMe().subscribe(res=>{
    //   console.log("res is " , res.data.attributes);
    //   this.aboutme = res.data;
    //   console.log("aboutme is " , this.aboutme);
    //   // better make an interface so that I can see what is in the data.
    //   // this.websiteHeroImage = environment.server + res.data.attributes.WebsiteHeroImage.data.attributes.url;
    //   this.websiteHeroImage =res.data.attributes.WebsiteHeroImage.data.attributes.url;
    //   console.log(this.websiteHeroImage);
    //   this.emailIcon = res.data.attributes.EmailIcon.data.attributes.url;
    //   this.linkedinIcon = res.data.attributes.LinkedinIcon.data.attributes.url;
    //   this.instagramIcon = res.data.attributes.InstagramIcon.data.attributes.url;

    // })
      // this.profileImage=res.data.attributes.Headshot.data.attributes.formats.large.url;

      // this.fullbio=res.data.attributes.FullBio;


      // this.name = res.data.attributes.Name;




  //   let getDivState = () => {
  //     let currentState = { width: document.body.clientWidth,
  //                          height: document.body.clientHeight
  //                        }
  //   return currentState;
  // }

  //   // let createStars = () => {
  //     let starContainer = document.createElement("div");


  //     let getRanNum = (min:any, max:any) => {
  //       let draw;
  //       do {
  //         draw = Math.floor(Math.random() * max);
  //       } while (draw > max || draw < min)
  //       return draw;
  //     }

  //     starContainer.className = "starContainer";
  //     starContainer.style.height = "20vh";
  //     document.body.appendChild(starContainer);
  //     let stars = getDivState().width / 50 ;  // the mass of the stars

  //     for (let i=1; i<=stars; i++) { // create stars limit by screen size
  //       let star = document.createElement("div");

  //       star.className = "star";
  //       let sizeOfStar = getRanNum(5, 7);
  //       star.style.borderRadius = "10px";
  //       // star.style.filter.blink = "10px";
  //       star.style.width = sizeOfStar + "px";
  //       star.style.height = sizeOfStar + "px";
  //       // star.style.height = Math.floor(Math.random()*10 + 1) + "vh";
  //       star.style.left= getRanNum(0, getDivState().width) +"px";
  //       star.style.top= Math.floor(Math.random()*25 + 1) + "vh";
  //       star.style.animationDuration= getRanNum(3, 8) + "s";
  //       // star.style.backgroundColor="yellow";
  //       starContainer.appendChild(star);
  //     }
    // }

    // get the current div width and height
    // can be adjusted to screen or window size


    // get a proper random number


    // createStars();


  }



}
