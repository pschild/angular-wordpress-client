import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {AppJuliaUnkrigModule} from "./app/custom/juliaunkrig/app.juliaunkrig.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppJuliaUnkrigModule);
