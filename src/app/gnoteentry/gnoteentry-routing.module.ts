import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GnoteentryComponent } from './gnoteentry.component';

const routes: Routes = [{ path: '', component: GnoteentryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GnoteentryRoutingModule { }
