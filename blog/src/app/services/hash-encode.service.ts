import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5'

const md5 = new Md5();

@Injectable({
  providedIn: 'root'
})

export class HashEncodeService {
  jsonData: string;

  constructor() { }

  encodeData(data){
    return btoa(this.convertData(data));
  }

  hashData(data){
    return md5.appendStr(this.convertData(data)).end()
  }

  convertData(data){
    return JSON.stringify(data)
  }

  


}
