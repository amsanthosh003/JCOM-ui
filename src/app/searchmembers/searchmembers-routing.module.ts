import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchmembersComponent } from './searchmembers.component';

const routes: Routes = [{ path: '', component: SearchmembersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchmembersRoutingModule { }
