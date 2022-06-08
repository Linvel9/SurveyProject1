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
  survey!:object
  openquestions: OpenQuestion[] = [];
  checkboxquestions: CheckBoxQuestion[] = [];
  radiobuttonquestions: RadioButtonQuestion[] = [];
  
  constructor(private surveyService:SurveyService) { }

  ngOnInit(): void {
    let suka = this.surveyService.getSurvey().subscribe((item:Survey[])=>{
      this.survey = JSON.parse(item[0].Survey)
      const entries = Object.entries(this.survey)
      //console.log(entries)
      for (var key in entries) {
        //console.log(entries[key]);
        if(entries[key][0].includes('OpenQTitle'))
        {
          this.openquestions.push(new OpenQuestion(entries[key][1]))
        }
        if(entries[key][0].includes('CheckBoxQTitle'))
        {
          let checkBoxQuestion: CheckBoxQuestion = new CheckBoxQuestion()
          let checkBoxes:CheckBox[] = []
          let key0 = entries[key][0]
          key0 = key0[key0.length - 2]
          //console.log(key0)
          for (var chbx in entries)
          {
            if(entries[chbx][0].includes('CheckBoxQName[' + key0 + ']'))
            {
              let checkBox:CheckBox = new CheckBox()
              checkBox.name = entries[chbx][1]
              checkBoxes.push(checkBox)
            }
          }
          checkBoxQuestion.question = entries[key][1]
          checkBoxQuestion.checkboxes = checkBoxes
          this.checkboxquestions.push(checkBoxQuestion)
        }
        if(entries[key][0].includes('RadioButtonQTitle'))
        {
          let radioQuestion: RadioButtonQuestion = new RadioButtonQuestion()
          let radioButtons:RadioButton[] = []
          let key0 = entries[key][0]
          key0 = key0[key0.length - 2]
          //console.log(key0)
          for (var chbx in entries)
          {
            if(entries[chbx][0].includes('RadioButtonQName[' + key0 + ']'))
            {
              let radioButton:RadioButton = new RadioButton()
              radioButton.name = entries[chbx][1]
              radioButtons.push(radioButton)
            }
          }
          radioQuestion.question = entries[key][1]
          radioQuestion.radiobuttons = radioButtons
          this.radiobuttonquestions.push(radioQuestion)
        }
      }
    })
    //console.log(this.openquestions)
    //console.log(this.checkboxquestions)
    //console.log(this.radiobuttonquestions)
  }

}