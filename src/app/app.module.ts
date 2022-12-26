import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';
import { ExtraComponent } from './extra/extra.component';
import { PracticeComponent } from './practice/practice.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PipespracComponent } from './pipesprac/pipesprac.component';
import { TestPipe } from './test.pipe';
import { HeaderComponent } from './header/header.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { AboutRouteComponent } from './about-route/about-route.component';
import { ContRouteComponent } from './cont-route/cont-route.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { ServicesdataService } from './servicesdata.service';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { HomeChildRouteComponent } from './home-child-route/home-child-route.component';
import { HttpCallComponent } from './http-call/http-call.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { FormsComponent } from './forms/forms.component';

const routes:Routes=[
  {path:"",component:HomeRouteComponent},
  {
    path:"home",component:HomeRouteComponent,
    children:[
      {
        path:"homechild",component:HomeChildRouteComponent
      }
    ]
},
  {path:"about",component:AboutRouteComponent},
  {path:"contact",component:ContRouteComponent},
  {path:"users",component:UsersComponent},
  {path:"users/:id",component:UserComponent},
  {path:'http',component:HttpCallComponent,canActivate:[AuthService]},
  {path:'login',component:FormsComponent},
  {path:"**",component:PageNotFoundComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExtraComponent,
    PracticeComponent,
    ChildComponent,
    ParentComponent,
    PipespracComponent,
    TestPipe,
    HeaderComponent,
    HomeRouteComponent,
    AboutRouteComponent,
    ContRouteComponent,
    PageNotFoundComponent,
    HomeChildRouteComponent,
    HttpCallComponent,
    NgcontentComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServicesdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
