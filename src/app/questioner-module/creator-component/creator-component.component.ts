import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, AbstractControl, NgModel, NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

import { OpenQuestion, CheckBox, CheckBoxQuestion, RadioButton, RadioButtonQuestion } from 'src/app/shared/models/survey-model';
import { Member } from 'src/app/shared/models/member-model';

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
  submitted = false;

  questions: any = [];
  title!: string;

  constructor() { }

  ngOnInit(): void {
  }

  inputHandler(event: any) {
    const value = event.target.value;
    this.title = value;
  }

  onSubmit(){
    this.submitted = true;
    this.member.name = this.memberForm.value.name;
    this.member.exercises = this.getSelectedExecrcisesNames();
    //console.log(this.memberForm.value);
  }

  getSelectedExecrcisesNames():string[]  {
    let selectedExecrcisesNames = ['s'];
    // for(let e of this.checkboxes){
    //   // for selected check boxes value would be true
    //   if(this.memberForm.value[e.id]){
    //     selectedExecrcisesNames.push(e.name);
    //   }
    // }
    return selectedExecrcisesNames;
  }

// onSubmit() {
//     this.socketService.sendMessage(this.message, this.userNickname);
// }

  OpenQ() {
    let openquestion: OpenQuestion = new OpenQuestion(this.title);
    this.openquestions.push(openquestion);
  }

  CheckBoxQ() {
    let checkbox: CheckBox = new CheckBox(this.title, false);
    this.checkboxes.push(checkbox);
  }

  CheckBoxQComplete() {
    this.checkboxquestions.push(new CheckBoxQuestion(this.title, this.checkboxes))
    this.checkboxes = [];
  }

  RadioButtonQ() {
    let radiobutton: RadioButton = new RadioButton(this.title, false);
    this.radiobutton.push(radiobutton);
  }

  RadioButtonQComplete() {
    this.radiobuttonquestions.push(new RadioButtonQuestion(this.title, this.radiobutton))
    this.radiobutton = [];
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