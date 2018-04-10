import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule, usersRouterComponents  } from './users-routing.module';
import { UserComponent, UserArrayService } from '.';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  declarations: [usersRouterComponents, UserComponent],
  providers: [UserArrayService]
})
export class UsersModule { }
