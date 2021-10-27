import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcceptedRoutingModule } from './accepted-routing.module';
import { AcceptedComponent } from './accepted.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AcceptedComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AcceptedRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    ToastrModule.forRoot(),ArchwizardModule,


    ToastrModule.forRoot() 
  ]
})
export class AcceptedModule {}
