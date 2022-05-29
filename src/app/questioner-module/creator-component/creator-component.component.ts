import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, AbstractControl, NgModel, NgForm, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';

import { OpenQuestion, CheckBox, CheckBoxQuestion, RadioButton, RadioButtonQuestion, Survey } from 'src/app/shared/models/survey-model';
import { Member } from 'src/app/shared/models/member-model';
import { SurveyService } from 'src/app/shared/services/SurveyCreateService';
import { Subscription } from 'rxjs';
import { Question } from 'src/app/shared/models/question-model';
import { Router } from '@angular/router';
import { json } from 'body-parser';

@Component({
  selector: 'app-creator-component',
  templateUrl: './creator-component.component.html',
  styleUrls: ['./creator-component.component.scss']
})

export class CreatorComponentComponent implements OnInit {
  @ViewChild('membershipForm') memberForm!: NgForm
  openquestions: OpenQuestion[] = [];
  checkboxes: CheckBox[] = [];
  checkboxquestions: CheckBoxQuestion[] = [];
  radiobutton: RadioButton[] = [];
  radiobuttonquestions: RadioButtonQuestion[] = [];
  member = new Member('', []);
  //submitted = false;
  form!: FormGroup;
  aSub!: Subscription;
  survey!: Survey;

  RBName: number[] = [];
  number: number = 0;
  questions: any = [];
  title!: string;


  constructor(private SurveyService: SurveyService,
              private router: Router) {}

  ngOnInit(): void {
     this.form = new FormGroup({
      title: new FormControl(null, Validators.required)
    })
  }

  inputHandler(event: any) {
    const value = event.target.value;
    this.title = value;
  }

  onSubmit(){
    
     this.questions.push(this.openquestions, this.checkboxquestions, this.radiobuttonquestions)
     alert(this.openquestions[0].name)
     const SurveyC: Survey = {
      QType1: JSON.stringify(this.openquestions),
      QType2: JSON.stringify(this.checkboxquestions),
      QType3: JSON.stringify(this.radiobuttonquestions),
      name: this.openquestions[0].name
    }
    this.aSub = this.SurveyService.createSurvey(SurveyC)
       .subscribe(
    () => alert("Added successfully!")
  )
    // this.submitted = true;
    // this.member.name = this.memberForm.value.name;
    // this.member.exercises = this.getSelectedExecrcisesNames();
    // console.log(this.memberForm.value);
  }


  // getSelectedExecrcisesNames():string[]  {
  //   let selectedExecrcisesNames = ['s'];
  //   // for(let e of this.checkboxes){
  //   //   // for selected check boxes value would be true
  //   //   if(this.memberForm.value[e.id]){
  //   //     selectedExecrcisesNames.push(e.name);
  //   //   }
  //   // }
  //   return selectedExecrcisesNames;
  // }

// onSubmit() {
//     this.socketService.sendMessage(this.message, this.userNickname);
// }

  OpenQ() {
    let openquestion: OpenQuestion = new OpenQuestion(this.title);
    this.openquestions.push(openquestion);
    this.form.reset();
  }

  CheckBoxQ() {
    let checkbox: CheckBox = new CheckBox(this.title, false);
    this.checkboxes.push(checkbox);
    this.form.reset();
  }

  CheckBoxQComplete() {
    this.checkboxquestions.push(new CheckBoxQuestion(this.title, this.checkboxes))
    this.checkboxes = [];
    this.form.reset();
  }

  RadioButtonQ() {
    let radiobutton: RadioButton = new RadioButton(this.title, false);
    this.radiobutton.push(radiobutton);
    this.form.reset();
  }

  RadioButtonQComplete() {
    this.RBName.push(this.number);
    this.radiobuttonquestions.push(new RadioButtonQuestion(this.title, this.radiobutton))
    this.radiobutton = [];
    this.form.reset();
    this.number++
  }

  Clear() {
    this.openquestions = []
    this.radiobuttonquestions = []
    this.checkboxquestions = []
    this.questions = []
    this.form.reset()
  }
//   createExercises(exerciseList: any): FormArray {
//     const arr = exerciseList.map((exercise: any) => {
//       return new FormControl(exercise.selected)
//     });
//     return new FormArray(arr);
//   }

//   createExercises(exerciseList): FormArray {
//     const arr = exerciseList.map(exercise => {
//       return new FormControl(exercise.selected)
//     });

//     return new FormArray(arr);
//   }
}