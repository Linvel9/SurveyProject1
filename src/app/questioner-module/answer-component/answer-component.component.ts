import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, AbstractControl, NgModel, NgForm, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';

import { OpenQuestion, CheckBox, CheckBoxQuestion, RadioButton, RadioButtonQuestion } from 'src/app/shared/models/survey-model';
import { Member } from 'src/app/shared/models/member-model';

@Component({
  selector: 'app-answer-component',
  templateUrl: './answer-component.component.html',
  styleUrls: ['./answer-component.component.scss']
})

export class AnswerComponentComponent implements OnInit {
 @ViewChild('membershipForm') memberForm!: NgForm
  openquestions: OpenQuestion[] = [];
  checkboxes: CheckBox[] = [];
  checkboxquestions: CheckBoxQuestion[] = [];
  radiobutton: RadioButton[] = [];
  radiobuttonquestions: RadioButtonQuestion[] = [];
  member = new Member('', []);
  submitted = false;
  form!: FormGroup;

  RBName: number[] = [];
  number: number = 0;
  count: number = 0;
  questions: any = [];
  title!: string;
  constructor() { }

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
  }

 
  Clear() {
    this.openquestions = []
    this.radiobuttonquestions = []
    this.checkboxquestions = []
    this.form.reset()
  }
}
