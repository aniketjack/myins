import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Ng7BootstrapBreadcrumbModule } from "ng7-bootstrap-breadcrumb";
import { ToastrModule } from 'ngx-toastr';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng7BootstrapBreadcrumbModule,
    ToastrModule.forRoot({
      timeOut: 3000,
     // toastComponent: CustomToastComponent,
      positionClass: 'toast-center-center',
      preventDuplicates: true,
      progressBar: false,
      closeButton: true,
      disableTimeOut: false,
      tapToDismiss: true
   }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
