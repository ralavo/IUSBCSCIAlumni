// this file allow to bootstrap the core application

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ParentModule }              from './alumni.module';


//start of the angular application by bootstraping the main Module
platformBrowserDynamic().bootstrapModule(ParentModule);
