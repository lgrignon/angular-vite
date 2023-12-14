import "@angular/compiler";
import 'zone.js';

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RootComponent } from './app/pages/layout';

bootstrapApplication(RootComponent, appConfig)
  .catch((err) => console.error(err));
