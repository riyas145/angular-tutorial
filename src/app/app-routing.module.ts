import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './about/about.component';
import { TableComponent } from  './table/table.component';
import { UploadComponent} from './about/upload/upload.component';
import { DashboardComponent } from './about/dashboard/dashboard.component';
import { DataTableComponent} from './about/data-table/data-table.component';
import { NewDataTableComponent } from './new-data-table/new-data-table.component';
import {  TablesDataComponent } from './tables-data/tables-data.component'


const routes: Routes = [
  {path:"about", component:AboutComponent},
  {path:'upload',component:UploadComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'data-table',component: DataTableComponent},
  {path:'table-sort',component:TableComponent},
  {path:'new-data-table',component:NewDataTableComponent},
  {path:'tables-data',component:TablesDataComponent}
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
