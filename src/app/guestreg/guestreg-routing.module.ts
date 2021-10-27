import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestregComponent } from './guestreg.component';

const routes: Routes = [{ path: '', component: GuestregComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestregRoutingModule { }
