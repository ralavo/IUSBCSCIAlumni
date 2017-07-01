import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Alumni } from '../../alumni';
import { AlumniService } from '../../services/alumni.service';
import {  FileUploader } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  moduleId: module.id,
  selector: 'addAlumni',
  templateUrl: 'addAlumni.component.html'
})

export class AddAlumniComponent implements OnInit { 
  alumniForm: FormGroup;
  alumni: Alumni[] ;

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
  
  constructor(private fb: FormBuilder, private alumniService: AlumniService){}

  ngOnInit(): void {
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
  }

  save(): void {
        

        this.alumniService.addAlumni(this.alumniForm.value).subscribe(alum =>{
          this.alumni.push(alum);
        });

        console.log('Saved: ' + JSON.stringify(this.alumniForm.value));
    }

  iuCampus=[
      'IU Bloogmington',
      'IUPUI',
      'IU East',
      'IU Kokomo',  
      'IU Northwest',
      'IU South Bend',
      'IU Southeast',
      'IU Fortwayne',  
    ];


  iusbSchool=[
    { id:'CLAS', name:'College of Liberal Art and Science'},
  ];
  
  iusbCSmajor=[
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

    gradYear = [
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
