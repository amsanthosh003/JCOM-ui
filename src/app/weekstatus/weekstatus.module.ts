import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeekstatusRoutingModule } from './weekstatus-routing.module';
import { WeekstatusComponent } from './weekstatus.component';


@NgModule({
  declarations: [WeekstatusComponent],
  imports: [
    CommonModule,
    WeekstatusRoutingModule
  ]
})
export class WeekstatusModule { }
