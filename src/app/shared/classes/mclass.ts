import { ElementRef } from "@angular/core";

declare var M:any
export interface MaterialInstance {
    getSelectedValues?(): void
    destroy?(): void
}
export class MaterialService {
    static selectFunc() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    }
}