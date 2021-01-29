import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AboutModule } from './about/about.module'
import { ReactiveFormsModule } from '@angular/forms';


//COMPONENTS
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './about/login/login.component';
import { RegisterComponent } from './about/register/register.component';
import { AgmCoreModule } from '@agm/core';

// MATERIAL IMPORT
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSortModule} from '@angular/material/sort';
import { TableComponent } from './table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NewDataTableComponent } from './new-data-table/new-data-table.component';
import { TablesDataComponent } from './tables-data/tables-data.component';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    TableComponent,
    NewDataTableComponent,
    TablesDataComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    AboutModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatSortModule,
    MatPaginatorModule,
    DataTablesModule,
    Ng2SmartTableModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyCVHRIx3vQ_f1SMqU-HPd5Sm9Mk8pVlQrE'
    }), 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
