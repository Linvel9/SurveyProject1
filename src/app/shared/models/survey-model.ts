export class OpenQuestion {
    name: string;
    text?: string;
    id?: string;
    constructor(name: string) {
        this.name = name;
    }
}

export class CheckBox {
    name: string;
    check?: boolean;
    text?: string;
    id?: string;
    constructor(name: string, check: boolean) {
        this.name = name;
        this.check = check;
    }
}

export class CheckBoxQuestion {
    question: string;
    checkboxes: CheckBox[]
    constructor(question: string, checkboxes: CheckBox[]) {
        this.question = question;
        this.checkboxes = checkboxes;
    }
}

export class RadioButton {
    name: string;
    check?: boolean;
    text?: string;
    id?: string;
    constructor(name: string, check: boolean) {
        this.name = name;
        this.check = check;
    }
}

export class RadioButtonQuestion {
    question: string;
    radiobuttons: RadioButton[]
    constructor(question: string, radiobutton: RadioButton[]) {
        this.question = question;
        this.radiobuttons = radiobutton;
    }
}

export interface Survey{
    QType1: string
    QType2: string
    QType3: string
    name: string
}
