import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerErrorComponent } from './server-error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ServerErrorComponent],
  declarations: [ServerErrorComponent]
})
export class ServerErrorModule { }
