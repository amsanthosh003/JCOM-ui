import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectpendingComponent } from './connectpending.component';

const routes: Routes = [{ path: '', component: ConnectpendingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectpendingRoutingModule { }
