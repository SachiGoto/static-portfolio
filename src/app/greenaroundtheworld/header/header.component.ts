import { Component, OnInit } from '@angular/core';
import{CommonService} from '../service/common.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private http:CommonService) { }

  heroImage='';
  logo=''
  title=''
  name=''

  ngOnInit(): void {
    this.http.gethomepage().subscribe(res=>{

      this.heroImage = res.data.attributes.HeroImage.data.attributes.formats.large.url;

      this.logo = res.data.attributes.logo.data.attributes.url;

      this.title=res.data.attributes.Title;

      this.name=res.data.attributes.Companyname;


 })

 console.log(this.logo);
  }

}
