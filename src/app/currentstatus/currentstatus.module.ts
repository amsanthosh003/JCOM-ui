import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentstatusRoutingModule } from './currentstatus-routing.module';
import { CurrentstatusComponent } from './currentstatus.component';


@NgModule({
  declarations: [CurrentstatusComponent],
  imports: [
    CommonModule,
    CurrentstatusRoutingModule
  ]
})
export class CurrentstatusModule { }
