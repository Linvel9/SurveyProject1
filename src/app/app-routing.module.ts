import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { AnswerComponentComponent } from './questioner-module/answer-component/answer-component.component';
import { CreatorComponentComponent } from './questioner-module/creator-component/creator-component.component';

const routes: Routes = [
  {path: '', component: SiteLayoutComponent, children: [
    { path: '', redirectTo: '/creator', pathMatch: 'full'},
    { path: 'creator', component: CreatorComponentComponent },
    { path: 'answer', component: AnswerComponentComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
