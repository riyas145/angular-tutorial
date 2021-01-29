import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface userInfo {
  id: number;
  name: any;
};
export interface cusInfo{
  id:number,
  name:string,
  age:number,
  payment:string,
  location:string,
};
export interface  fullInfo {
  id:number,
  name:string,
  age:number,
  location:string,
  country:string,
  payment:string,
  phone:number,
  status:string

}

const UserInfoData: userInfo[] =[
  {id:223,name:"riyas"},
  {id:553,name:"ahamed"},
  {id:212,name:"Jhon"},
  {id:221,name:'Doe'},
];



const fullTableInfo:fullInfo[] = [
  {id:1,name:"Riyas Ahamed",age:24,location:"Chennai",country:"India",payment:"Success",phone:9543030145,status:"Acitve"},
  {id:2,name:"Ahamed",age:26,location:"Trichy",country:"India",payment:"Success",phone:997766554421,status:"Acitve"},
  {id:3,name:"Jhon",age:30,location:"Delhi",country:"India",payment:"Success",phone:2234544545676,status:"Acitve"},
  {id:4,name:"Flaherty",age:40,location:"Framingham",country:"USA",payment:"Success",phone:+12328937374,status:"Acitve"},
  {id:5,name:"Simpson",age:44,location:"Milwaukee",country:"UK",payment:"Success",phone:+1232893545,status:"Acitve"},
  {id:6,name:"Pinto",age:44,location:"Huntington",country:"Dubai",payment:"Success",phone:+971232893545,status:"Acitve"},
  {id:1,name:"Riyas Ahamed",age:24,location:"Chennai",country:"India",payment:"Success",phone:9543030145,status:"Acitve"},
  {id:2,name:"Ahamed",age:26,location:"Trichy",country:"India",payment:"Success",phone:997766554421,status:"Acitve"},
  {id:3,name:"Jhon",age:30,location:"Delhi",country:"India",payment:"Success",phone:2234544545676,status:"Acitve"},
  {id:4,name:"Flaherty",age:40,location:"Framingham",country:"USA",payment:"Success",phone:+12328937374,status:"Acitve"},
  {id:5,name:"Simpson",age:44,location:"Milwaukee",country:"UK",payment:"Success",phone:+1232893545,status:"Acitve"},
  {id:6,name:"Pinto",age:44,location:"Huntington",country:"Dubai",payment:"Success",phone:+971232893545,status:"Acitve"},
  {id:1,name:"Riyas Ahamed",age:24,location:"Chennai",country:"India",payment:"Success",phone:9543030145,status:"Acitve"},
  {id:2,name:"Ahamed",age:26,location:"Trichy",country:"India",payment:"Success",phone:997766554421,status:"Acitve"},
  {id:3,name:"Jhon",age:30,location:"Delhi",country:"India",payment:"Success",phone:2234544545676,status:"Acitve"},
  {id:4,name:"Flaherty",age:40,location:"Framingham",country:"USA",payment:"Success",phone:+12328937374,status:"Acitve"},
  {id:5,name:"Simpson",age:44,location:"Milwaukee",country:"UK",payment:"Success",phone:+1232893545,status:"Acitve"},
  {id:6,name:"Pinto",age:44,location:"Huntington",country:"Dubai",payment:"Success",phone:+971232893545,status:"Acitve"},
]
const CustomerInfo:cusInfo[] =[
  {id:1,name:"Raul B. Terry",age:26,payment:"Success",location:"Gladewater"},
  {id:12,name:"Riyas Ahamed M",age:24,payment:"Success",location:"Chennai"},
  {id:32,name:"Leland N. Flaherty",age:34,payment:"Success",location:"Framingham"},
  {id:876,name:"Alvin D. Pinto",age:43,payment:"Pending",location:"Milwaukee"},
  {id:43,name:"Adrienne J. Simpson",age:32,payment:"Waiting",location:"Huntington"},
  {id:66,name:"Shanna K. Wooten",age:55,payment:"Success",location:"Macon"},
  {id:55,name:"Alfonso M. Ward",age:43,payment:"Failed",location:"Houston"},
  {id:33,name:"Liliana D. Lewis  ",age:45,payment:"Success",location:"New York"},
  {id:123,name:"Mary B. Wood",age:46,payment:"Success",location:"Martelle"},
  {id:422,name:"Diane R. Calhoun",age:56,payment:"Failed",location:"Hanover"},
  {id:1,name:"Raul B. Terry",age:26,payment:"Success",location:"Gladewater"},
  {id:12,name:"Riyas Ahamed M",age:24,payment:"Success",location:"Chennai"},
  {id:32,name:"Leland N. Flaherty",age:34,payment:"Success",location:"Framingham"},
  {id:876,name:"Alvin D. Pinto",age:43,payment:"Pending",location:"Milwaukee"},
  {id:43,name:"Adrienne J. Simpson",age:32,payment:"Waiting",location:"Huntington"},
  {id:66,name:"Shanna K. Wooten",age:55,payment:"Success",location:"Macon"},
  {id:55,name:"Alfonso M. Ward",age:43,payment:"Failed",location:"Houston"},
  {id:33,name:"Liliana D. Lewis  ",age:45,payment:"Success",location:"New York"},
  {id:123,name:"Mary B. Wood",age:46,payment:"Success",location:"Martelle"},
  {id:422,name:"Diane R. Calhoun",age:56,payment:"Failed",location:"Hanover"},
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns:string[]=['id','name'];
  userInfo = UserInfoData;
  CustomersInfo = new MatTableDataSource (CustomerInfo);
  cusColdisplay:string[]=["id",'name','age','location','payment'];
  fulldisplay:string[]= ['id','name','location','age','country','phone','payment','status'];
  fullTableInfos = new MatTableDataSource (fullTableInfo);
  date:number = 2021;
  
  @ViewChild('fullInfoSort', {static: true}) fullInfoSort: MatSort;
  @ViewChild('cusSort', {static: true}) cusSort: MatSort;
  @ViewChild('cusSortPage', {static: true}) cusSortPage: MatPaginator;
  @ViewChild('fullInfoSortPage', {static: true}) fullInfoSortPage: MatPaginator;
 
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
        this.fullTableInfos.paginator = this.fullInfoSortPage;
        this.fullTableInfos.sort = this.fullInfoSort;
        this.CustomersInfo.paginator = this.cusSortPage;
        this.CustomersInfo.sort = this.cusSort;
      }

}
