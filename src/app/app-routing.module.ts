import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      { 
         path: 'dashboard/main/weekstatus',
         loadChildren: () => 
         import('./weekstatus/weekstatus.module').then(m => m.WeekstatusModule) 
      },
      { 
         path: 'dashboard/main/currentstatus', 
         loadChildren: () =>
         import('./currentstatus/currentstatus.module').then(m => m.CurrentstatusModule) 
      },

      {
         path: 'profile',
         loadChildren: () =>
         import('./profile/profile.module').then(m => m.ProfileModule)
       },
       { path: 'changepassword', 
         loadChildren: () =>
         import('./changepassword/changepassword.module').then(m => m.ChangepasswordModule) },

      {
        path: 'connectentry',
        loadChildren: () =>
        import('./connectentry/connectentry.module').then(m => m.ConnectentryModule)
      },

      { 
         path: 'gnoteentry',
        loadChildren: () => 
        import('./gnoteentry/gnoteentry.module').then(m => m.GnoteentryModule)
      },
      { path: 'showcase',
        loadChildren: () =>
        import('./showcase/showcase.module').then(m => m.ShowcaseModule) 
      },
      {
         path: 'guestreg',
         loadChildren: () =>
         import('./guestreg/guestreg.module').then(m => m.GuestregModule) 
      },
      { path: 'jcomtables',
        loadChildren: () =>
        import('./jcomtables/jcomtables.module').then(m => m.JcomtablesModule) },

        {
           path: 'searchmembers',
          loadChildren: () => 
          import('./searchmembers/searchmembers.module').then(m => m.SearchmembersModule) },
         
          { path: 'connectpending',
           loadChildren: () =>
           import('./connectpending/connectpending.module').then(m => m.ConnectpendingModule) },
      {
        path: 'Customer',
        loadChildren: () =>
        import('./customer/customer.module').then(
          (m) => m.CustomerModule
        ),
      },
      {
        path: 'User',
        loadChildren: () =>
        import('./user/user.module').then(
          (m) => m.UserModule
        ),
      },
      
      
      
      {
        path: 'Pending',
        loadChildren: () =>
        import('./pending/pending.module').then(
          (m) => m.PendingModule
        ),
      },
      {
        path: 'Accepted',
        loadChildren: () =>
        import('./accepted/accepted.module').then(
          (m) => m.AcceptedModule
        ),
      },
      {
        path: 'Completed',
        loadChildren: () =>
        import('./completed/completed.module').then(
          (m) => m.CompletedModule
        ),
      },
      {
        path: 'Cancel',
        loadChildren: () =>
        import('./cancel/cancel.module').then(
          (m) => m.CancelModule
        ),
      },
     
      {
        path: 'advance-table',
        loadChildren: () =>
          import('./advance-table/advance-table.module').then(
            (m) => m.AdvanceTableModule
          ),
      },
 
      {
        path: 'extra-pages',
        loadChildren: () =>
          import('./extra-pages/extra-pages.module').then(
            (m) => m.ExtraPagesModule
          ),
      },
      {
        path: 'multilevel',
        loadChildren: () =>
          import('./multilevel/multilevel.module').then(
            (m) => m.MultilevelModule
          ),
      },
    ],
  },

  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  { path: 'currentstatus', loadChildren: () => import('./currentstatus/currentstatus.module').then(m => m.CurrentstatusModule) },
  
 
  
 
  
  
 
  
  
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
