import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';

import { GreenHomeComponent } from './greenaroundtheworld/home/home.component';
import { GreenProductsComponent } from './greenaroundtheworld/products/products.component';
import {GreenProductDetailComponent} from './greenaroundtheworld/product-detail/product-detail.component'
import { GreenAboutComponent } from './greenaroundtheworld/about/about.component';
import { GreenFooterComponent } from './greenaroundtheworld/footer/footer.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"", component: HomeComponent},
  {path:"projects", component: ProjectsComponent},
  {path:"about-me", component:AboutComponent},
  // {path:"projects/:projectID/:project.attributes.Slug", component:ProjectDetailsComponent},
  {path:"projects/:projectID/:slug", component:ProjectDetailsComponent},
   {path:"contact", component:ContactComponent},
   {path:"navbar", component:NavbarComponent},

  //  {path:"ecommerce", component:HomeComponent},
   {path:"greenaroundtheworld/home", component:GreenHomeComponent},
   {path:"green-products", component:GreenProductsComponent},
   {path:"green-products/:id", component:GreenProductDetailComponent},
   {path:"green-about", component:GreenAboutComponent},
   {path:"green-footer", component:GreenFooterComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
