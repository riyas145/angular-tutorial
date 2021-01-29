import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {RegexValidator, RegexConstants} from './pass.validator';
import { Router}  from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private fb: FormBuilder, private router:Router) { }
   loginform: FormGroup;
   
  ngOnInit() {
    this.loginform = this.fb.group({
      'name': new FormControl ('', [Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      'password': new FormControl('',[Validators.required,RegexValidator(RegexConstants.DECIMAL_6_4)])
    })
  }
  
  formSubmit() {
    if(this.loginform.valid){
      this.router.navigate(['/about']);
      this.loginform.reset;
    }
  }

}
