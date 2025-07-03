import { ApplicationConfig, provideBrowserGlobalErrorListeners
  , provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ApiModule, Configuration } from './api/todo_api';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      ApiModule.forRoot(() =>
        new Configuration({
          basePath: 'http://localhost:18080'
        })
      )
    )
  ]
};
