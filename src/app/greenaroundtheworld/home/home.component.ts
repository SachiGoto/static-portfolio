import { Component, OnInit } from '@angular/core';
import {CommonService} from "../service/common.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class GreenHomeComponent implements OnInit {

  constructor(private http:CommonService) { }

  heroImage='';
  title='';

  ngOnInit(): void {

    this.http.gethomepage().subscribe(res=>{

      this.heroImage = res.data.attributes.HeroImage.data.attributes.formats.large.url;



      this.title=res.data.attributes.Title;




 })


  }

}
