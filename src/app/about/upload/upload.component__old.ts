import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  uploadForm: FormGroup;
   file:File = null;
 

  fileUpload(e){
    this.file = e.target.files[0];
    console.log(this.file);
   
  }
  uploaformSubmit(){
    const formdata = new FormData();
    // formdata.append('image',this.file,this.file.name);
    if(this.uploadForm.valid){
    alert('working');
    }
    
  }
  constructor( private fb: FormBuilder, private http: HttpClient) { }
   
  ngOnInit(): void {
    this.uploadForm =  this.fb.group({
      'image': new FormControl ('',[Validators.required])
});
  }

}
