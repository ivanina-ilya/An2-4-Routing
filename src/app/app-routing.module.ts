import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AboutComponent,
  MessagesComponent,
  LoginComponent,
  PathNotFoundComponent
} from './core';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'messages',
    component: MessagesComponent,
    outlet: 'popup'
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
