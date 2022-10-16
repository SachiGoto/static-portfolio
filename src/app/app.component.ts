import { Component, OnInit } from '@angular/core';

import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  constructor(private cs:CommonService){};

  ngOnInit(): void {


  }
}
