import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MytableComponent } from './mytable.component';

const routes: Routes = [{ path: '', component: MytableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MytableRoutingModule { }
