import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekstatusComponent } from './weekstatus.component';

const routes: Routes = [{ path: '', component: WeekstatusComponent ,
children: [
  
  

  { 
     path: 'currentstatus', 
     loadChildren: () =>
     import('../currentstatus/currentstatus.module').then(m => m.CurrentstatusModule) 
  },
 
  
  
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekstatusRoutingModule { }
