import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// IMPORT YOUR COMPONENTS
import { HeroComponent } from './components/hero/hero.component';
import { ContactComponent } from './components/contact/contact.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LandComponent } from './components/land/land.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InsightsComponent } from './components/insights/insights.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ContactComponent,
    RequirementsComponent,
    ProjectsComponent,
    LandComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    InsightsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
