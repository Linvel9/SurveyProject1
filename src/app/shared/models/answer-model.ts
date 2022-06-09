export class CheckBoxAnswers {
    name?: string;
    isAnswer?: boolean[]
    constructor() {
    }
}

export class RadioButtonAnswers {
    name?: string;
    isAnswer?: number = 0;
    constructor() {
    }
}

export interface Answer{
    Answer: string
}