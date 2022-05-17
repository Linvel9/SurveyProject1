import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { CreatorComponentComponent } from './creator-component/creator-component.component';



@NgModule({
  declarations: [
    CreatorComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class QuestionerModuleModule { }