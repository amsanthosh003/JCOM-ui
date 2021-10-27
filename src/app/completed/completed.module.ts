import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompletedRoutingModule } from './completed-routing.module';
import { CompletedComponent } from './completed.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CompletedComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompletedRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    ToastrModule.forRoot(),ArchwizardModule,


    ToastrModule.forRoot() 
  ]
})
export class CompletedModule {}
