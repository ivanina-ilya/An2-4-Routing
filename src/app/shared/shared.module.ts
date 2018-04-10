import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent, SpinnerService } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SpinnerComponent],
  declarations: [SpinnerComponent],
  providers: [SpinnerService]
})
export class SharedModule { }
