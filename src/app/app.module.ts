import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';	

import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableComponent } from '../app/component/table/table.component';
import { DashboardComponent } from '../app/component/dashboard/dashboard.component';
//import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';







@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    NgbModule,
    // MatToolbarModule,
    // MatSidenavModule,
    // MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
