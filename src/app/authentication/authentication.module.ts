import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SigninComponent } from './signin/signin.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { SignupComponent } from './signup/signup.component';
import { FeatherModule } from 'angular-feather';
import {
  Facebook,
  Twitter,
  Github,
  Gitlab,
  User,
  Key,
  UserCheck,
  Mail,
  Users,
  Phone,
  Globe,
  Crosshair,
  Flag,
  Lock,
  Award,
  Briefcase,
  FileText
  
} from 'angular-feather/icons';
import { ForgotComponent } from './forgot/forgot.component';
import { Page500Component } from './page500/page500.component';
import { Page404Component } from './page404/page404.component';
import { ResetComponent } from './reset/reset.component';
import { TermsComponent } from './terms/terms.component';

const icons = {
  Facebook,
  Twitter,
  Github,
  Gitlab,
  User,
  Key,
  UserCheck,
  Mail,
  Users,
  Phone,
  Globe,
  Crosshair,
  Flag,
  Lock,
  Award,
  Briefcase,
  FileText
 
  
};

@NgModule({
  declarations: [SigninComponent, SignupComponent, ForgotComponent, Page500Component, Page404Component, ResetComponent, TermsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    FeatherModule.pick(icons),ArchwizardModule
  ],
})
export class AuthenticationModule {}
