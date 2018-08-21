import { element } from 'protractor';
import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { JSEncrypt } from 'js-encrypt';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DecryptService } from './services/decrypt-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  response;
  errorArray = [];
  errorMessages = [];

  constructor(
    private http: HttpClient,
    private decryptService: DecryptService
  ) { }


  sendData() {

    const message = {
      'password' : '1234567890',
      'email' : '19lawrence93@gma',
    };
    const messageJson = JSON.stringify(message);

    const passphrase = this.generateKey();


    const publicKey = `-----BEGIN PUBLIC KEY-----
    MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEApkDuWNGSBXF3e0jwsnXu
    8xbu01u+NNN1rL6mSqk5PeoYusFNC8kVCJ/9ZTWHTZMEUTMQhFMSxJaFiMgxuf0z
    5CrhYPoQaVLqGe6cpqzsQYm39teoCdrAv1PZ3M6M4WsMWxCnvM3Zw92sitLE1dhg
    +eH6K/+hCbj9DTiOCbefk39g/UvLaqfWmt0XJ/3g43UsK82uYHlJwNc34HeiED03
    nDNMmbT9d0JUPRpAlQ6g8Wo9KEq0Oh9B19Tg9+liGAynJgW9vExbFT8LL4I7PvCz
    1O34eiSlZ9wo//qCufLenTbbxukhPnr3SdL+znIMwuFzXSWzwsV/nPPoGVhtvPGe
    SgeJo0TKogQqIN7XGvdy8TD698p1E3dAKYjbcDGxggIFdao4THD3FbCjsYxPpu/+
    t7Bu+/jGLnxjh8aG7ZobNjxVslM94vzMAKCOEIb07Hv3ONcUdqPwl57KbuJMORwT
    Pw9KsTheO7fzims47S4oly0HuTLPvR4Cm9zUWSqkiVpxuBHCCc7R4UP4qh73Ea73
    Tq01EQxPDugaqRdL3tVzw5lHhummrkxMsRMZlhRgSStrR5eyGNa9DBIzI6K6xgAT
    ySujhETmYx4EjzyaPzVgpV8dCzclhMNqDw+I5czcPo7FvC6P1ndQP/gltipAodf6
    yXPeVge2a+tI+AnzyXC112kCAwEAAQ==
    -----END PUBLIC KEY-----`;

    // Symetric Encryption
    const salt = CryptoJS.lib.WordArray.random(256);
    const iv = CryptoJS.lib.WordArray.random(16);


    const key = CryptoJS.PBKDF2(passphrase, salt, { hasher: CryptoJS.algo.SHA512, keySize: 64 / 8, iterations: 999 });

    const encrypted = CryptoJS.AES.encrypt(messageJson, key, { iv: iv });

    const data = {
      ciphertext: CryptoJS.enc.Base64.stringify(encrypted.ciphertext),
      salt: CryptoJS.enc.Hex.stringify(salt),
      iv: CryptoJS.enc.Hex.stringify(iv)
    };


    // Start Asymetric encryption
    const jsEncryptObj = new JSEncrypt();
    jsEncryptObj.setPublicKey(publicKey);
    const encryptKey = jsEncryptObj.encrypt(passphrase);


    // Data to be sent to server
    const payload = encryptKey + 'llmwns' + data.ciphertext + 'llmwns' + data.salt + 'llmwns' + data.iv;

    // console.log(payload);

    this.http.post('http://auth.tospay.example/api/v1/register/email', { 'payload': payload }).subscribe(
      res => {
        this.response = res;

        const resp = this.decryptService.decryptResponse(this.response.payload);



        console.log(resp);

      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('client' + err.error);
        } else {

          const resp = this.decryptService.decryptResponse(err.error.payload);

          console.log(resp);

          // this.errorArray =  resp.errors;

          // console.log(this.errorArray.password.length);

        //  for ( let i = 0; i < this.errorArray.password.length; i++) {
        //     this.errorMessages.push(this.errorArray.password[i]);
        //  }

        //  console.log(this.errorMessages);

        }
      }
    );
  }

  generateKey() {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz*&-%/!?*+=()';
    let randomstring = '';
    const keylegth = 20;
    for (let i = 0; i < keylegth; i++) {
      const rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
  }



}
