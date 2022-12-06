import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class GreenHomeComponent implements OnInit {

  constructor(private http:ServiceService) { 
  
  }

  heroImage='https://res.cloudinary.com/vanarts-webdev/image/upload/v1659232182/greenaroundtheworldhomepageheroimage2_aec4e6669a.jpg';
  title="All Natural And Sustainable Products";

  ngOnInit(): void {

  }

}
