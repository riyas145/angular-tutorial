import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private fb: FormBuilder) { }
  loginform: FormGroup;

  ngOnInit(): void {
    this.loginform = this.fb.group({
      'name': new FormControl('',[Validators.required,]),
      'password': new FormControl('',[Validators.required,Validators.minLength(8)])
    });

   
  }
  formSubmit(){

  }
}
