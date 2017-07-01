import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }  from '@angular/forms';
import { RoutingModule } from './routing.module';
import { AlumniComponent } from './alumni.component';
import { AddAlumniComponent } from './components/addAlumni/addAlumni.component';
import { SearchAlumniComponent } from './components/searchAlumni/searchAlumni.component';
import { ViewAllAlumniComponent } from './components/viewAllAlumni/viewAllAlumni.component';
import { ViewAlumniComponent } from './components/viewAlumni/viewAlumni.component';
import { HttpModule } from '@angular/http';
import { AlumniService } from './services/alumni.service';
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  imports:      [ BrowserModule, 
                  HttpModule, 
                  RoutingModule,
                  ReactiveFormsModule,
                  FileUploadModule
                   ],
  declarations: [ AlumniComponent, 
                  AddAlumniComponent, 
                  SearchAlumniComponent, 
                  ViewAllAlumniComponent, 
                  ViewAlumniComponent,
                  ],
  bootstrap:    [ AlumniComponent ], //specify the component which get started first (root component)
  providers:    [ AlumniService ]
})
export class ParentModule { }
