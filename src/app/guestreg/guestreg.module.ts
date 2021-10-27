import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestregRoutingModule } from './guestreg-routing.module';
import { GuestregComponent } from './guestreg.component';

import { FeatherModule } from 'angular-feather';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';


import { HttpClientModule } from '@angular/common/http';


import {
  Facebook,
  Twitter,
  Github,  Gitlab,  User,
  Key, UserCheck,  Mail,  Users,  Phone,  Globe,  Crosshair,  Flag,  Lock,  Award,  Briefcase,
  Smartphone,  UserPlus,
  Airplay,
  Link2,
  Columns,
  CreditCard,Calendar,
  MoreHorizontal,
  MapPin
  
} from 'angular-feather/icons';
const icons = {
  Facebook,
  Twitter,
  Github,  Gitlab, User,  Key, UserCheck, Mail,  Users,  Phone,  Globe,
  Crosshair,  Flag,  Lock,  Award,  Briefcase,  Smartphone,  UserPlus,
  Airplay,	Link2,
  Columns,
  CreditCard,
  Calendar,
  MoreHorizontal,
  MapPin
 
  
};

@NgModule({
  declarations: [GuestregComponent],
  imports: [
    CommonModule,
    GuestregRoutingModule,
    FeatherModule.pick(icons),
   
    ReactiveFormsModule,
    
    NgxDatatableModule,
    HttpClientModule,
    ToastrModule.forRoot(),ArchwizardModule
  ]
})
export class GuestregModule { }
