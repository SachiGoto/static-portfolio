import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import{Skill} from '../interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent implements OnInit {
  myskills:Skill[]=[];
  hello:string="Hello";
  server = environment.server;

  constructor(private cs:CommonService) { }

  ngOnInit(): void {

    // this.cs.getSkills().subscribe(res=>{
    //   console.log(res);
    //   this.myskills = res.data;
    // })
  }

}
