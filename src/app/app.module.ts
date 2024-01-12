import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { NgxPanZoomModule } from 'ngx-panzoom';
import { OrgComponent } from './org/org.component';
@NgModule({
  declarations: [
    AppComponent,
    OrgComponent
  ],
  imports: [
    BrowserModule,
    OrganizationChartModule,
    NgxPanZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
