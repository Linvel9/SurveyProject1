export class OpenQuestion {
    name: string;
    text?: string;
    id?: string;
    constructor(name: string) {
        this.name = name;
    }
}

export class CheckBox {
    name?: string;
    check?: boolean;
    text?: string;
    id?: string;
    constructor() {
    }
}

export class CheckBoxQuestion {
    question?: string;
    checkboxes! : CheckBox[]
    constructor() {
    }
}

export class RadioButton {
    name?: string;
    check?: boolean;
    text?: string;
    id?: string;
    constructor() {
    }
}

export class RadioButtonQuestion {
    question?: string;
    radiobuttons!: RadioButton[]
    constructor() {
    }
}

export interface Survey{
    Survey: string
}
