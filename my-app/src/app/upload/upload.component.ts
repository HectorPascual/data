import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent {

  fileToUpload: File = null;
  name: String = null;

  constructor(private router: Router) {}


  handleFileInput(files: FileList, name) {
    this.fileToUpload = files.item(0);
    this.name = name.value;
  }

  onClickMe() {
    //code on submit
    console.log('Submitted');
    console.log(this.name);
    console.log(this.fileToUpload);
  }

}
