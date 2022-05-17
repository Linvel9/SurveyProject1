import { FormGroup } from "@angular/forms";

export class Question {
    constructor(
        public title?: string,
        public form?: FormGroup,
        public id?: number
    ) { }

    /*static getRoomInfo(obj: any) {
        return new Room(obj.name, obj.messages, obj.id);
    }*/
}