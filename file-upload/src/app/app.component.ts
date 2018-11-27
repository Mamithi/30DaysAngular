import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public uploader: FileUploader = new FileUploader({url: URL,
              itemAlias: 'photo'});

 ngOnInit() {
   this.uploader.onAfterAddingFile
 }
}
