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

export class UserAnswers {
    OpenAnswers!: string[];
    CheckBoxAnswers!: string[][];
    RadioButtonAnswers!: string[][];
}

export interface Answer{
    Answer: string
}