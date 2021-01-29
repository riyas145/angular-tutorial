import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';
import { HttpClientModule  } from '@angular/common/http';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';  
import { AgmCoreModule } from '@agm/core';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';



import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UploadComponent, DashboardComponent, DataTableComponent],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    AboutRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RxReactiveFormsModule,
    CommonModule,
    MatTableModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,   
    MatNativeDateModule,
    MatSortModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyCVHRIx3vQ_f1SMqU-HPd5Sm9Mk8pVlQrE'
    }),
    NgxDaterangepickerMd.forRoot()
  ]
})
export class AboutModule { }
