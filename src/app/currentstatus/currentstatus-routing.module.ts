import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentstatusComponent } from './currentstatus.component';

const routes: Routes = [{ path: '', component: CurrentstatusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentstatusRoutingModule { }
