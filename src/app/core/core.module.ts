import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  AboutComponent,
  MessagesComponent,
  PathNotFoundComponent,
  AuthGuard,
  MessagesService,
  AuthService,
  LoginComponent,
  CanDeactivateGuard,
  DialogService,
  SpinnerService
} from '.';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AboutComponent,
    PathNotFoundComponent,
    MessagesComponent,
    LoginComponent
  ],
  providers: [
    MessagesService,
    AuthGuard,
    AuthService,
    DialogService,
    CanDeactivateGuard,
    SpinnerService
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        `CoreModule is already loaded. Import it in the AppModule only.`
      );
    }
  }
}
