import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectentryComponent } from './connectentry.component';

const routes: Routes = [{ path: '', component: ConnectentryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectentryRoutingModule { }
