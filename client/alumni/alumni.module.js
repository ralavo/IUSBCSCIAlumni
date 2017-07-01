"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var routing_module_1 = require("./routing.module");
var alumni_component_1 = require("./alumni.component");
var addAlumni_component_1 = require("./components/addAlumni/addAlumni.component");
var searchAlumni_component_1 = require("./components/searchAlumni/searchAlumni.component");
var viewAllAlumni_component_1 = require("./components/viewAllAlumni/viewAllAlumni.component");
var viewAlumni_component_1 = require("./components/viewAlumni/viewAlumni.component");
var http_1 = require("@angular/http");
var alumni_service_1 = require("./services/alumni.service");
var ng2_file_upload_1 = require("ng2-file-upload");
var ParentModule = (function () {
    function ParentModule() {
    }
    return ParentModule;
}());
ParentModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            routing_module_1.RoutingModule,
            forms_1.ReactiveFormsModule,
            ng2_file_upload_1.FileUploadModule
        ],
        declarations: [alumni_component_1.AlumniComponent,
            addAlumni_component_1.AddAlumniComponent,
            searchAlumni_component_1.SearchAlumniComponent,
            viewAllAlumni_component_1.ViewAllAlumniComponent,
            viewAlumni_component_1.ViewAlumniComponent,
        ],
        bootstrap: [alumni_component_1.AlumniComponent],
        providers: [alumni_service_1.AlumniService]
    })
], ParentModule);
exports.ParentModule = ParentModule;
//# sourceMappingURL=alumni.module.js.map