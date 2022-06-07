import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, AbstractControl, NgModel, NgForm, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MaterialService,MaterialInstance } from 'src/app/shared/classes/mclass';
import { ElementRef } from "@angular/core";
import { OpenQuestion, CheckBox, CheckBoxQuestion, RadioButton, RadioButtonQuestion, Survey } from 'src/app/shared/models/survey-model';
import { Member } from 'src/app/shared/models/member-model';
import { SurveyService } from 'src/app/shared/services/SurveyCreateService';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creator-component',
  templateUrl: './creator-component.component.html',
  styleUrls: ['./creator-component.component.scss']
})

export class CreatorComponentComponent implements OnInit {
  @ViewChild('membershipForm') memberForm!: NgForm
  @ViewChild('select') selectRef!: ElementRef
  select!: MaterialInstance
  value: any
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
  title: string = "0";
  OpenQTitle: string[] = []
  CheckBoxQTitle: string[] = []
  CheckBoxQName: string[][] = [[],[]]
  RadioButtonQTitle: string[] = []
  RadioButtonQName: string[][] =[[],[]]



  constructor(private SurveyService: SurveyService,
              private router: Router
              ) {}

  ngOnInit(): void {
     this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      OpenQTitle: new FormControl(null, Validators.required)
    })
  }
  // ngAfterViewInit() {
  //   this.select = MaterialService.selectFunc(this.selectRef)
  // }
  inputHandler(event: any) {
    const value = event.target.value;
    this.title = value;

  }
  // GetValSel(){
  //   M.getSelectedValues();
  // }
 

  onSubmit(){
    
     //this.questions.push(this.openquestions, this.checkboxquestions, this.radiobuttonquestions)
     alert(JSON.stringify(this.memberForm.value))
     const SurveyC: Survey = {
      Survey: JSON.stringify(this.memberForm.value)
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
  }
  DeleteCB(i:any,j:any){
    this.checkboxquestions[i].checkboxes.splice(j,1)

  }
  DeleteRB(i:any,j:any){
    this.radiobuttonquestions[i].radiobuttons.splice(j,1)

  }
  CheckBoxQ(index:any) {
    let checkbox: CheckBox = new CheckBox();
    this.checkboxes.push(checkbox);
    this.checkboxquestions[index].checkboxes=this.checkboxes
    
  }

  CheckBoxQComplete() {
    this.checkboxquestions.push(new CheckBoxQuestion())
    this.checkboxes = [];
    
  }

  RadioButtonQ(index:any) {
    let radiobutton: RadioButton = new RadioButton();
    this.radiobutton.push(radiobutton);
    this.radiobuttonquestions[index].radiobuttons=this.radiobutton
    ;
  }

  RadioButtonQComplete() {
    this.RBName.push(this.number);
    this.radiobuttonquestions.push(new RadioButtonQuestion())
    this.radiobutton = [];
    
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