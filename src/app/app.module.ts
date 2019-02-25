import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { NotableclientsComponent } from './notableclients/notableclients.component';
import { BlogComponent } from './blog/blog.component';
import { TestemonialsComponent } from './testemonials/testemonials.component';
import { TeamComponent } from './team/team.component';
import { PricingComponent } from './pricing/pricing.component';
import { SkillsComponent } from './skills/skills.component';

import {DataService} from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    IntroComponent,
    GalleryComponent,
    ContactComponent,
    ServicesComponent,
    FooterComponent,
    NotableclientsComponent,
    BlogComponent,
    TestemonialsComponent,
    TeamComponent,
    PricingComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
