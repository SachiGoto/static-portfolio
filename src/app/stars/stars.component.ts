import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  // if( this.component === "contact"){
    console.log("hello");

    let getDivState = () => {
      let currentState = { width: document.body.clientWidth,
                           height: document.body.clientHeight
                         }
    return currentState;
  }




      let getRanNum = (min:any, max:any) => {
        let draw;
        do {
          draw = Math.floor(Math.random() * max);
        } while (draw > max || draw < min)
        return draw;
      }

      let starContainer = document.createElement("div");

      let starMainContainer = document.getElementById("starMaincontainer");

      starContainer.className = "starContainer";
      starContainer.style.height = "100vh";
      starContainer.style.position = "absolute";
      starContainer.style.width = "100%";
      starContainer.style.top = "0";

      if(starMainContainer){
      starMainContainer.appendChild(starContainer);
      }
      // let createStars = () => {

      let stars = getDivState().width / 20 ;  // the mass of the stars

      for (let i=1; i<=stars; i++) { // create stars limit by screen size
        let star = document.createElement("div");

        star.className = "star";
        let sizeOfStar = getRanNum(2, 4);
        star.style.borderRadius = "10px";
        star.style.position = "absolute";
        star.style.animation = "twinkle 3s infinite";
        star.style.backgroundColor = "rgb(232, 248, 167)"
        // star.style.filter.blink = "10px";
        star.style.width = sizeOfStar + "px";
        star.style.height = sizeOfStar + "px";
        // star.style.height = Math.floor(Math.random()*10 + 1) + "vh";
        star.style.left= getRanNum(0, getDivState().width) +"px";
        star.style.top= Math.floor(Math.random()*25 + 1) + "vh";
        star.style.animationDuration= getRanNum(3, 8) + "s";
        // star.style.backgroundColor="yellow";
        starContainer.appendChild(star);
      }

    // }


  }
  }

// }
