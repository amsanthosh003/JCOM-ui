import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JcomtablesComponent } from './jcomtables.component';

const routes: Routes = [{ path: '', component: JcomtablesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JcomtablesRoutingModule { }
