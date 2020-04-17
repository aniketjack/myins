import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';


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
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
