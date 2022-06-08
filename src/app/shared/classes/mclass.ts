import { ElementRef } from "@angular/core";

declare var M:any
export interface MaterialInstance {
    getSelectedValues?(): void
    destroy?(): void
}
export class MaterialService {
    static selectFunc() {
        var elem = document.querySelectorAll('/select');
        var instance = M.FormSelect.init(elem);
    }

    static toast(message: string, myClass: string) {
    M.toast({ html: message, classes: myClass})
    }
}