import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytableRoutingModule } from './mytable-routing.module';
import { MytableComponent } from './mytable.component';
import { FeatherModule } from 'angular-feather';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';


import { HttpClientModule } from '@angular/common/http';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  Facebook,
  Twitter,
  Github,  Gitlab,  User,
  Key, UserCheck,  Mail,  Users,  Phone,  Globe,  Crosshair,  Flag,  Lock,  Award,  Briefcase,
  Smartphone,  UserPlus,
  Airplay,
  Link2,
  FileText
  
} from 'angular-feather/icons';
const icons = {
  Facebook,
  Twitter,
  Github,  Gitlab, User,  Key, UserCheck, Mail,  Users,  Phone,  Globe,
  Crosshair,  Flag,  Lock,  Award,  Briefcase,  Smartphone,  UserPlus,
  Airplay,	Link2
 ,FileText
  
};



@NgModule({
  declarations: [MytableComponent],
  imports: [
    CommonModule,
    MytableRoutingModule,
    FeatherModule.pick(icons),
   
    ReactiveFormsModule,
    
    NgxDatatableModule,
    HttpClientModule,
    ToastrModule.forRoot(),ArchwizardModule,
    NgxSkeletonLoaderModule,
    NgSelectModule
  
  ]
})
export class MytableModule { }
