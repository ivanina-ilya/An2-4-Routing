import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PathNotFoundComponent} from "./components/path-not-found/path-not-found.component";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    PathNotFoundComponent
  ]
})
export class CoreModule { }
