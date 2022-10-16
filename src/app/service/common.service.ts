import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HomePage, ProjectDetail, Projects, Education } from '../interface';
import{Skills} from '../interface'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  projectJson:any;

  // private url = "https://cms.sachigoto.me/api/project-news?populate=*";
  private url = environment.server;

  private url2 = "https://sachiportfoliocontacts.herokuapp.com/post"




// getJson(){
//   this.http.get('assets/projects.json').subscribe((res)=>{
//     this.projectJson = res;
//     console.log('result ', this.projectJson)
//   })
// }

//  getAboutMe(){
//   // return this.http.get(this.url);
//   // return this.http.get(this.url + "/api/project-news?populate=*");
//   return this.http.get<HomePage>(this.url + "/api/about-me?populate=deep");

//  }

 postlead(data:any){
      // return this.http.post(this.url + "/api/contacts", data);
      return this.http.post(this.url2, data);
 }

//  getSkills(){
//   return this.http.get<Skills>(this.url + '/api/skills/?populate=deep,2');
//  }


//  getProjects(){
//   // return this.http.get<Projects[]>(this.url + '/api/project-news?populate=deep')
//   return this.http.get<Projects>(this.url + '/api/project-news?populate=deep')
//  }

//  getProjectById(id:number){
//   return this.http.get<{data:ProjectDetail}>(this.url + '/api/project-news/' + id + '?populate=deep')
//  }

//  getEducation(){

//   return this.http.get<{data:Education[]}>(this.url + '/api/educations/?populate=deep')
//  }

//  https://cms.sachigoto.me/api/project-news/3?populate=deep





}
