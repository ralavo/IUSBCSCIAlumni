"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ReactiveSelectComp = (function () {
    function ReactiveSelectComp() {
        this.states = [
            { name: 'Arizona', abbrev: 'AZ' },
            { name: 'California', abbrev: 'CA' },
            { name: 'Colorado', abbrev: 'CO' },
            { name: 'New York', abbrev: 'NY' },
            { name: 'Pennsylvania', abbrev: 'PA' },
        ];
        this.form = new forms_1.FormGroup({
            state: new forms_1.FormControl(this.states[3]),
        });
    }
    return ReactiveSelectComp;
}());
ReactiveSelectComp = __decorate([
    core_1.Component({
        selector: 'example-app',
        template: "\n    <form [formGroup]=\"form\">\n      <select formControlName=\"state\">\n        <option *ngFor=\"let state of states\" [ngValue]=\"state\">\n          {{ state.abbrev }}\n        </option>\n      </select>\n    </form>\n     <p>Form value: {{ form.value | json }}</p> \n     <!-- {state: {name: 'New York', abbrev: 'NY'} } -->\n  ",
    })
], ReactiveSelectComp);
exports.ReactiveSelectComp = ReactiveSelectComp;
//# sourceMappingURL=test.component.js.map