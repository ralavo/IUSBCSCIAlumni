"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var alumni_service_1 = require("../../services/alumni.service");
var ng2_file_upload_1 = require("ng2-file-upload");
var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var AddAlumniComponent = (function () {
    function AddAlumniComponent(fb, alumniService) {
        this.fb = fb;
        this.alumniService = alumniService;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.iuCampus = [
            'IU Bloogmington',
            'IUPUI',
            'IU East',
            'IU Kokomo',
            'IU Northwest',
            'IU South Bend',
            'IU Southeast',
            'IU Fortwayne',
        ];
        this.iusbSchool = [
            { id: 'CLAS', name: 'College of Liberal Art and Science' },
        ];
        this.iusbCSmajor = [
            'Bachelor of Science in Computer Science',
            'Bachelor of Science in Informatics',
            'Master of Science in Applied Mathematics and Computer Science',
            'Minor in Computer Science',
            'Minor in Computer Application',
            'Minor in Informatics',
            'Certificate in Computer Programming',
            'Certificate in Advanced Computer Programming',
            'Certificate in Computer Application',
            'Graduate Certificate in Technology for Administration',
            'Postbaccalauret Certificate in Applied Informatics'
        ];
        this.gradYear = [
            '2016',
            '2015',
            '2014',
            '2013',
            '2012',
            '2011',
            '2010',
            '2009'
        ];
    }
    AddAlumniComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    AddAlumniComponent.prototype.ngOnInit = function () {
        this.alumniForm = this.fb.group({
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            campus: '',
            school: '',
            major: '',
            graduationYear: '',
            companyName: '',
            companyWeb: '',
            position: '',
            jobDesc: '',
            linkedIn: '',
            memories: '',
            recommendation: ''
        });
    };
    AddAlumniComponent.prototype.save = function () {
        var _this = this;
        this.alumniService.addAlumni(this.alumniForm.value).subscribe(function (alum) {
            _this.alumni.push(alum);
        });
        console.log('Saved: ' + JSON.stringify(this.alumniForm.value));
    };
    return AddAlumniComponent;
}());
AddAlumniComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'addAlumni',
        templateUrl: 'addAlumni.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, alumni_service_1.AlumniService])
], AddAlumniComponent);
exports.AddAlumniComponent = AddAlumniComponent;
//# sourceMappingURL=addAlumni.component.js.map