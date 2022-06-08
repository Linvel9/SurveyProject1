import { Component, OnInit } from '@angular/core';
import { OpenQuestion, CheckBox, CheckBoxQuestion, RadioButton, RadioButtonQuestion, Survey } from 'src/app/shared/models/survey-model';
import { NgModel } from '@angular/forms';
import { SurveyService } from 'src/app/shared/services/SurveyCreateService';

@Component({
  selector: 'app-yes',
  templateUrl: './answer-component.component.html',
  styleUrls: ['./answer-component.component.scss']
})
export class AnswerComponentComponent implements OnInit {
  blya:any[] = [];
  survey!:object
  openquestions: OpenQuestion[] = [{name:"Это вопрос 1"},{name:"Это вопрос 2"}];
  checkboxquestions: CheckBoxQuestion[] = [{question:"Это вопрос с выбором",checkboxes:[{name:"Это выбор первый"},{name:"Это выбор второй"}]}];
  radiobuttonquestions: RadioButtonQuestion[] = [{question:"Это вопрос с выбором 2",radiobuttons:[{name:"Это выбор первый"},{name:"Это выбор второй"}]}];


  arr:string[] =["asdasd","asdasdasd"]
  constructor(private surveyService:SurveyService) { }

  ngOnInit(): void {
    let suka = this.surveyService.getSurvey().subscribe((item:Survey[])=>{
      this.survey = JSON.parse(item[0].Survey)
      for (var key in this.survey) {
        console.log(key + ' ' + this.survey[0]);
      }
      //console.log(this.survey)
    })
  }

}