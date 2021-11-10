import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FeatherModule } from 'angular-feather';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { HttpClientModule } from '@angular/common/http';


import {
  Facebook,
  Twitter,
  Github,  Gitlab,  User,
  Key, UserCheck,  Mail,  Users,  Phone,  Globe,  Crosshair,  Flag,  Lock,  Award,  Briefcase,
  Smartphone,  UserPlus,
  Airplay,
  Link2,
  FileText,MapPin,	Target,	Map,MoreHorizontal
  
} from 'angular-feather/icons';
const icons = {
  Facebook,
  Twitter,
  Github,  Gitlab, User,  Key, UserCheck, Mail,  Users,  Phone,  Globe,
  Crosshair,  Flag,  Lock,  Award,  Briefcase,  Smartphone,  UserPlus,
  Airplay,	Link2
 ,FileText,MapPin,	Target,	Map,MoreHorizontal
  
};

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    // CKEditorModule,
    FeatherModule.pick(icons),
   
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    NgxDatatableModule,
    HttpClientModule,
    ToastrModule.forRoot(),ArchwizardModule,
    NgbModule,
   
  ]
})
export class ProfileModule { }
