import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'alumni',
  templateUrl: 'alumni.component.html'
})

export class AlumniComponent { 
  
  showAlumniComp: boolean;
  showViewComp: boolean;
  showViewAllComp: boolean;
  showSearchComp: boolean;

  constructor(){
    this.showAlumniComp = false;
    this.showViewComp = false;
    this.showViewAllComp = false;
    this.showSearchComp = false;
  }

  addAlumni(){						
    this.showAlumniComp = true;
    this.showViewComp = false;
    this.showViewAllComp = false;
    this.showSearchComp = false;
  }

  viewAlumni(){						
    this.showAlumniComp = false;
    this.showViewComp = true;
    this.showViewAllComp = false;
    this.showSearchComp = false;
  }

  viewAllAlumni(){						
    this.showAlumniComp = false;
    this.showViewComp = false;
    this.showViewAllComp = true;
    this.showSearchComp = false;
  }

  searchAlumni(){						
    this.showAlumniComp = false;
    this.showViewComp = false;
    this.showViewAllComp = false;
    this.showSearchComp = true;
  }
}
