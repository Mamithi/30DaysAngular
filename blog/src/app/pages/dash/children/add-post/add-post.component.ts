import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../models/post.model';
import { AddPostService } from '../../../../services/add-post.service';
import { HttpErrorResponse } from '@angular/common/http';
import {FileUploadModule} from 'primeng/fileupload';
import { HandleImagesService } from '../../../../services/handle-images.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  imageUrl1 : string | any;
  imageUrl2 : string | any;
  imageUrl3 : string | any;

  constructor(
    private save_post_service: AddPostService,
    private handle_images: HandleImagesService,
  ) { }

  ngOnInit() {
  }

  post = new Post('', '', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  
  savePost() {
    this.post.image1 = this.imageUrl1;
    this.post.image2 = this.imageUrl2;
    this.post.image3 = this.imageUrl3;
    this.save_post_service.savePost(this.post).subscribe(
      (res: any) => {
        console.log(res)
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured")
        } else {
          console.log(err)
        }
      }
    );
  }

  handleImage1(file: FileList){
   this.imageUrl1 = this.handle_images.readImage1(file);
  }

  handleImage2(file: FileList){
   this.imageUrl2 = this.handle_images.readImage2(file);
  }

  handleImage3(file: FileList){
    this.imageUrl3 = this.handle_images.readImage3(file);
   }  
}
