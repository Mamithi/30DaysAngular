import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleImagesService {
  imageUrl1 : string | any;
  imageUrl2 : string | any;
  imageUrl3 : string | any;
  fileToUpload1: File = null;
  fileToUpload2: File = null;
  fileToUpload3: File = null;

  constructor() { }
  
  readImage1(file){
    this.fileToUpload1 = file.item(0);

    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl1 = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload1);

    return this.imageUrl1;
  }

  readImage2(file){
    this.fileToUpload2 = file.item(0);

    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl2 = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload2);

    return this.imageUrl2;
  }

  readImage3(file){
    this.fileToUpload3 = file.item(0);

    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl3 = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload3);

    return this.imageUrl3;
  }
}
