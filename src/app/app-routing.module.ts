import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { UserTelematicsComponent } from './user-telematics/user-telematics.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home',
      breadcrumb: [
          {
            label: 'Home',
            url: '/home'
          }
        ]
      }
    },
    {
      path: 'help',
      component: HelpComponent,
      data: {
        title: 'Help',
        breadcrumb: [
            {
              label: 'Help Section',
              url: '/help'
            }
          ]
        }
      },
      {
        path: 'telematics',
        component: UserTelematicsComponent,
        data: {
          title: 'Telematics',
          breadcrumb: [
              {
                label: 'Telematics',
                url: '/telematics'
              }
            ]
          }
        },
        {
          path: 'dashboard',
          component: AdminDashboardComponent,
          data: {
            title: 'Dashboard',
            breadcrumb: [
                {
                  label: 'Dashboard',
                  url: '/dashboard'
                }
              ]
            }
          }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
