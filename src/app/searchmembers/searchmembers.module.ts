import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchmembersRoutingModule } from './searchmembers-routing.module';
import { SearchmembersComponent } from './searchmembers.component';
import { FeatherModule } from 'angular-feather';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';


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
  declarations: [SearchmembersComponent],
  imports: [
    CommonModule,
    SearchmembersRoutingModule,
    FeatherModule.pick(icons),
   
    ReactiveFormsModule,
    
    NgxDatatableModule,
    HttpClientModule,
    ToastrModule.forRoot(),ArchwizardModule,
    NgxSkeletonLoaderModule,
    NgxPaginationModule
  ]
})
export class SearchmembersModule { }
