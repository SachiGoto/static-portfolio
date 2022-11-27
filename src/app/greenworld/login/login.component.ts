import { Component, OnInit } from '@angular/core';
import{ServiceService} from '../services/service.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class GreenLoginComponent implements OnInit {

  constructor(private http:ServiceService, private router:Router) { }

  user_name:string='';
  password:string='';
  loginStatus = true;

  login(){

    let logindata={
         "identifier":this.user_name,
         "password":this.password
    }

    // this.http.loginService(logindata).subscribe(loginData=>{
    //   // this.loginStatus = loginData.login;
    //   if(loginData.jwt){
    //     // console.log(loginData);
    //     localStorage.setItem("jwt", loginData.jwt);

    //     this.router.navigate(['/admin']);
    //   }
    // })



  }
  ngOnInit(): void {


  }

}
