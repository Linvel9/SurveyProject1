import { Component, OnInit, ViewChild } from '@angular/core';
import { OpenQuestion, CheckBox, CheckBoxQuestion, RadioButton, RadioButtonQuestion, Survey } from 'src/app/shared/models/survey-model';
import { MaterialService, MaterialInstance } from 'src/app/shared/classes/mclass';
import { NgForm} from '@angular/forms';
import { SurveyService } from 'src/app/shared/services/SurveyCreateService';
import { Answer, CheckBoxAnswers, RadioButtonAnswers, UserAnswers } from 'src/app/shared/models/answer-model';
import { SurveyAnswerService } from 'src/app/shared/services/SueveyAnswerService';

@Component({
  selector: 'app-yes',
  templateUrl: './answer-component.component.html',
  styleUrls: ['./answer-component.component.scss']
})
export class AnswerComponentComponent implements OnInit {
  @ViewChild('answerForm') answerForm!: NgForm
  survey!:object
  openquestions: OpenQuestion[] = [];
  OpenQuestion: string[] = [];
  checkboxquestions: CheckBoxQuestion[] = [];
  CheckBox: string[][] = [];
  CheckBoxAnswers: CheckBoxAnswers[] = [];
  radiobuttonquestions: RadioButtonQuestion[] = [];
  RadioButton:string[][] = [];
  RadioButtonAnswers: RadioButtonAnswers[] = [];
  
  constructor(private surveyService:SurveyService,
              private answerService:SurveyAnswerService) { }

  ngOnInit(): void {
    let suka = this.surveyService.getSurvey().subscribe((item:Survey[])=>{
      this.survey = JSON.parse(item[0].Survey)
      const entries = Object.entries(this.survey)
      for (var key in entries) {
        if(entries[key][0].includes('OpenQTitle'))
        {
          this.openquestions.push(new OpenQuestion(entries[key][1]))
        }
        if(entries[key][0].includes('CheckBoxQTitle'))
        {
          let checkBoxQuestion: CheckBoxQuestion = new CheckBoxQuestion()
          let checkBoxes:CheckBox[] = []

          let checkBoxAnswers: CheckBoxAnswers = new CheckBoxAnswers()
          checkBoxAnswers.name = entries[key][1]
          this.CheckBoxAnswers.push(checkBoxAnswers)

          let key0 = entries[key][0]
          key0 = key0[key0.length - 2]
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
  }

  onSubmit()
  {
    this.checkboxquestions.forEach((elemenet) => {
      let strArray:string[] = []
      strArray.push(elemenet.question)
      elemenet.checkboxes.forEach((chbx) => {
        if(chbx.check)
        {
          strArray.push(chbx.name)
        }
      })
      this.CheckBox.push(strArray)
    })

    this.radiobuttonquestions.forEach((elemenet) => {
      let strArray:string[] = []
      strArray.push(elemenet.question)
      elemenet.radiobuttons.forEach((rdbt) => {
        if(rdbt.check == 1)
        {
          strArray.push(rdbt.name)
          console.log(strArray)
        }
      })
      this.RadioButton.push(strArray)
    })

    const answer: UserAnswers = new UserAnswers();
    answer.OpenAnswers = this.OpenQuestion;
    answer.CheckBoxAnswers = this.CheckBox;
    answer.RadioButtonAnswers = this.RadioButton;
    console.log(answer)
         const Answers: Answer = {
      Answer: JSON.stringify(answer),
    }
    this.answerService.saveAsnwer(Answers)
       .subscribe(
    () => MaterialService.toast("Ваши результаты записаны", "good"),
    error => {MaterialService.toast(error.statusText, "danger")
    console.warn(error)}
  )
    alert(JSON.stringify(this.checkboxquestions))
  }
}