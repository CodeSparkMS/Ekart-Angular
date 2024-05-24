import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';   // This module is resplonsible for loading application in desktop browser

import { AppModule } from './app/app.module';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

