import { FormGroup } from "@angular/forms";

export class Question {
    constructor(
        public form: FormGroup,
        public type: string,
        public title?: string,
        public id?: string
    ) { }

    /*static getRoomInfo(obj: any) {
        return new Room(obj.name, obj.messages, obj.id);
    }*/
}