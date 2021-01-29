import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-data-table',
  templateUrl: './new-data-table.component.html',
  styleUrls: ['./new-data-table.component.css']
})
export class NewDataTableComponent implements OnInit {
  date = 2021;
  cus_info = {
    columns: {
      id:{title:'ID',editable:false,filter:false},
      name:{title:'name',editable:false,filter:false},
      country:{title:'Country',editable:false,filter:false},
      age:{title:'Age',editable:false,filter:false},
    },
    actions:{edit:false,delete:false,add:false},
    pager:{perPage:5},
  };
   settings = {
    columns: {
      id: {title: 'ID',editable:false,filter:false},
      name: {title: 'Full Name',editable:false,filter:false},
      username: {title: 'User Name',editable:false,filter:false},
      email: { title: 'Email',editable:false,filter:false},
    },
    actions:{edit:false,delete:false,add:false},
 
   
  };
  data = [
    {id: 1,name: "Leanne Graham",username: "Bret",email: "Sincere@april.biz"},
    {id: 2,name: "Ervin Howell",username: "Antonette",email: "Shanna@melissa.tv"},   
    {id: 11,name: "Nicholas DuBuque",username: "Nicholas.Stanton",email: "Rey.Padberg@rosamond.biz"},
    {id: 1,name: "Leanne Graham",username: "Bret",email: "Sincere@april.biz"},
    {id: 2,name: "Ervin Howell",username: "Antonette",email: "Shanna@melissa.tv"},   
    {id: 11,name: "Nicholas DuBuque",username: "Nicholas.Stanton",email: "Rey.Padberg@rosamond.biz"},
    {id: 1,name: "Leanne Graham",username: "Bret",email: "Sincere@april.biz"},
    {id: 2,name: "Ervin Howell",username: "Antonette",email: "Shanna@melissa.tv"},   
    {id: 11,name: "Nicholas DuBuque",username: "Nicholas.Stanton",email: "Rey.Padberg@rosamond.biz"},
    {id: 1,name: "Leanne Graham",username: "Bret",email: "Sincere@april.biz"},
    {id: 2,name: "Ervin Howell",username: "Antonette",email: "Shanna@melissa.tv"},   
    {id: 11,name: "Nicholas DuBuque",username: "Nicholas.Stanton",email: "Rey.Padberg@rosamond.biz"},
  ];

  cust_data = [
    {id:1,name:"Riyas",country:"India",age:22},
    {id:2,name:"Hermelinda",country:"Savannah",age:23},
    {id:3,name:"Flora",country:"Harlingen",age:24},
    {id:4,name:"Marilyn",country:"Redmond",age:32},
    {id:5,name:"Catherine",country:"Augusta",age:55},
    {id:6,name:"Dorothy",country:"Johnstown",age:43},
    {id:7,name:"Riyas",country:"India",age:22},
    {id:8,name:"Hermelinda",country:"Savannah",age:23},
    {id:9,name:"Flora",country:"Harlingen",age:24},
    {id:10,name:"Marilyn",country:"Redmond",age:32},
    {id:11,name:"Catherine",country:"Augusta",age:55},
    {id:12,name:"Dorothy",country:"Johnstown",age:43},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
