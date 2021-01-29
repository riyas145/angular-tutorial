import { AfterViewInit, Component, OnDestroy, OnInit, ViewChildren,QueryList } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

import { Subject } from 'rxjs';

export interface cusInfo{
  id:number,
  name:string,
  age:number,
  payment:string,
  location:string,
};
@Component({
  selector: 'app-tables-data',
  templateUrl: './tables-data.component.html',
  styleUrls: ['./tables-data.component.css']
})
export class TablesDataComponent implements AfterViewInit, OnDestroy, OnInit{
  dtOptions: DataTables.Settings = {};
  @ViewChildren(DataTableDirective)
  table:QueryList<DataTableDirective>;
  triggerOne: Subject<any> = new Subject();
  triggerTwo: Subject<any> = new Subject();

  constructor() { }

  ngOnInit(): void {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      ajax: '../assets/data.json',
      columns: [
        {title: 'ID',data: 'id'}, 
        {title: 'First name',data: 'firstName'},
        {title: 'Last name',data: 'lastName'},
        {title: 'Age',data: 'age'},
      ]
    };
    
  }
  ngAfterViewInit(): void {
    this.triggerOne.next();
    this.triggerTwo.next();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.triggerOne.unsubscribe();
    this.triggerTwo.unsubscribe();
   
    
  }
  resetTable(num:number): void {
    // this.table.forEach((dtElement: DataTableDirective, index: number) => {
    //   dtElement.dtInstance.then((dtInstance: any) => {
    //     console.log(`The DataTable ${index} instance ID is: ${dtInstance.table().node().id}`);
    //   });
    // });
    this.table.forEach((dtElement: DataTableDirective) => {
      if(dtElement.dtInstance)
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy(); 
               
      });
    });
   
    
    if(num == 1){
    //  alert('1');
       this.triggerTwo.next(); 
       
    }
    if(num == 2){
     // alert('2');
      this.triggerOne.next();   
    }
  // resetTable(): void {     
  //   this.table.forEach((table: DataTableDirective) => {
  //     if(table.dtInstance)
  //       table.dtInstance.then((dtInstance: DataTables.Api) => {
  //         dtInstance.destroy();          
  //     });
  //   });
  //   this.triggerOne.next(); 
  //   this.triggerTwo.next();    
  // }
}


}
