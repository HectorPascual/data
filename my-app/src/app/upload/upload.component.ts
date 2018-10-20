import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ApiService} from '../api.service'

// const URL = '/api/';
const URL = 'http://localhost:3000/dowork';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html'
})
export class UploadComponent {
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  response: number = 0;
  inputValue: string = null;
  constructor(private api: ApiService){
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
        this.response = response;
        console.log("Score : ",this.response);
        api.postBook().subscribe(res => {
          console.log(res);
        }, err => {
          console.log(err);
        });
    };
  }

  onKey(event) {
    this.inputValue = event.target.value;
    console.log(this.inputValue);
  }
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
