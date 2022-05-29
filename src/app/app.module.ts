import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreatorComponentComponent } from './questioner-module/creator-component/creator-component.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorComponentComponent,
    SiteLayoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
