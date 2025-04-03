import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';


import { ActionReducer, MetaReducer, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../environments/environment'; 
import { userReducer } from './store/user-store/user.reducer';
import { AuthModule } from '@auth0/auth0-angular';
import { productUserReducer } from './store/cateroty-store/product-user.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export function localStorageSyncReducer(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reducer: ActionReducer<any>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
): ActionReducer<any> {
  return localStorageSync({
    keys: ['userState', 'productUserState'],
    rehydrate: true,
  })(reducer);
}

// eslint-disable-next-line @typescript-eslint/array-type, @typescript-eslint/no-explicit-any
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(
      {
        userState: userReducer,
        productUserState: productUserReducer
        
      },
      { metaReducers }
    ),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    }),
    provideEffects([]),
    provideHttpClient(), 
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    importProvidersFrom(
      AuthModule.forRoot({
        domain: environment.AUTH0.DOMAIN,
        clientId: environment.AUTH0.CLIENTID,
        cacheLocation:'localstorage',
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      })
    ), provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
