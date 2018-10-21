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
        var user = {name:this.inputValue,id:14,position:3,best_score:this.response,attempt_number:5}
        api.postUser(user).subscribe(res => {
          console.log("post to db done",res);

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
