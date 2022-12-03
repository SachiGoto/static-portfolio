import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from "ng-recaptcha";
import { MyskillsComponent } from './myskills/myskills.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarsComponent } from './stars/stars.component';
import { GreenHeaderComponent } from './greenworld/header/header.component';
import {GreenHomeComponent} from './greenworld/home/home.component';
import { GreenProductsComponent } from './greenworld/products/products.component';
import { GreenProductDetailComponent } from './greenworld/product-detail/product-detail.component';
import {GreenAboutComponent} from './greenworld/about/about.component';
import{GreenFooterComponent} from './greenworld/footer/footer.component';
import { TestComponent } from './greenworld/test/test.component';








@NgModule({


  declarations: [

    AppComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectDetailsComponent,
    FooterComponent,
    SocialComponent,
    MyskillsComponent,
    NavbarComponent,
    StarsComponent,
    GreenHeaderComponent,
    GreenHomeComponent,
    GreenProductsComponent,
    GreenProductDetailComponent,
    GreenAboutComponent,
    GreenFooterComponent,
    TestComponent





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RecaptchaModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
