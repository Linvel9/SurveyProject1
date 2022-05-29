import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { CreatorComponentComponent } from './creator-component/creator-component.component';
import { AnswerComponentComponent } from './answer-component/answer-component.component';



@NgModule({
  declarations: [
    CreatorComponentComponent,
    AnswerComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class QuestionerModuleModule { }