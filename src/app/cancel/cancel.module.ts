import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CancelRoutingModule } from './cancel-routing.module';
import { CancelComponent } from './cancel.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CancelComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CancelRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    ToastrModule.forRoot(),ArchwizardModule,


    ToastrModule.forRoot() 
  ]
})
export class CancelModule {}
