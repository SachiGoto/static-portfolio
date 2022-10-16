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
import { HeaderComponent } from './greenaroundtheworld/header/header.component';
import {GreenHomeComponent} from './greenaroundtheworld/home/home.component';
import { GreenProductsComponent } from './greenaroundtheworld/products/products.component';
import { GreenProductDetailComponent } from './greenaroundtheworld/product-detail/product-detail.component';
import {GreenAboutComponent} from './greenaroundtheworld/about/about.component';
import{GreenFooterComponent} from './greenaroundtheworld/footer/footer.component';








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
    HeaderComponent,
    GreenHomeComponent,
    GreenProductsComponent,
    GreenProductDetailComponent,
    GreenAboutComponent,
    GreenFooterComponent





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
