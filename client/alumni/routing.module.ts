import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddAlumniComponent }   from './components/addAlumni/addAlumni.component';


const routes: Routes = [
  { path: 'addAlumni',  component: AddAlumniComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
