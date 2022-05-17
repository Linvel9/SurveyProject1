import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from 'src/app/shared/models/question-model';

@Component({
  selector: 'app-creator-component',
  templateUrl: './creator-component.component.html',
  styleUrls: ['./creator-component.component.scss']
})
export class CreatorComponentComponent implements OnInit {

  form!: Question;
  formArray: Question[] = [];
  title!: string;

  constructor() { }

  ngOnInit(): void {
  }

  inputHandler(event: any) {
    const value = event.target.value;
    this.title = value;
}

/*onSubmit() {
    this.socketService.sendMessage(this.message, this.userNickname);
}*/

  OpenQ() {
    this.form = new Question()
    console.log(this.form)
    this.form.title = this.title
    this.form.form = new FormGroup({
      'openQ': new FormControl(null),
    });
    this.formArray.push(this.form)
  }

  /*createExercises(exerciseList): FormArray {
    const arr = exerciseList.map(exercise => {
      return new FormControl(exercise.selected)
    });

    return new FormArray(arr);
  }*/
}