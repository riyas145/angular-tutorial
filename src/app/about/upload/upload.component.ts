import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  imageSrc: string;
  imgValid:boolean;
  imgType:boolean;
  imgSize:boolean;
  myForm = new FormGroup({
   file: new FormControl('', [Validators.required]),
   fileSource: new FormControl('', [Validators.required])
 });
  
  constructor( private http:HttpClient  ) { }
   
  get f(){
    return this.myForm.controls;
  }
  fileUpload(event) {
    this.myForm.reset();
    this.imgSize =true;
    this.imgType=true;
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      if (event.target.files[0].type === 'image/jpeg' || 
      event.target.files[0].type === 'image/png' || 
      event.target.files[0].type ==='image/jpg') {
          this.imgType = false;
      if (event.target.files[0].size < 2000000) {
        this.imgSize=false;
      }else{this.imgSize=true;}
  } else {
    this.imgType = true;
  }
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
      //  console.log(this.imageSrc);
        this.myForm.patchValue({
          fileSource: reader.result,
        });
   
      };
   
    }
  }
  uploaformSubmit(){
   // console.log(this.myForm.value);
    if(!this.imgValid && !this.imgSize){
      
      this.http.post('http://localhost/upload/upload.php', this.myForm.value)
      .subscribe(res => {
       // console.log(res);
        this.myForm.reset();
        alert('Image Uploaded');
      });
      this.myForm.reset();

    }
    
  }


  ngOnInit(): void {
  
  }

}
