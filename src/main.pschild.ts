import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {AppPschildModule} from "./app/custom/pschild/app.pschild.module";
import {environment} from "./environments/environment.pschild";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppPschildModule);
