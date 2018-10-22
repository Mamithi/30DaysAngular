import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessagesService } from './services/messages.service';
import Echo from 'laravel-echo';

declare global {
  interface Window { io: any; }
  interface Window { Echo: any; }
}

window.io =  require('socket.io-client');
window.Echo = window.Echo;

window.Echo = new Echo({
  broadcaster: 'socket.io',
  host: 'http://auth.tospay.test:6001',
  // auth: {
  //   headers: {
  //     Authorization : 'Bearer ' + localStorage.getItem('access_token')
  //   }
  // }
});


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    message = new FormControl('');
    messages: any;

    constructor(
      private msg: MessagesService
      ) {
    }

    ngOnInit() {
      this.getMessages();
      this.listen();
      // console.log(localStorage.getItem('access_token'));

    }

    getMessages() {
      this.msg.fetchMessages().subscribe(
        (res: any) => {
          this.messages = res.payload;
          console.log(this.messages);
        }
      );
    }

    sendMessage() {
      this.msg.saveMessage(this.message.value).subscribe(
        (res: any) => {
          console.log('from button press its ' + res.payload);
          // this.messages.unshift(res.payload);
        }
      );
    }


    listen() {
      window.Echo.channel('test-event')
          .listen('TestEvent', (msg) => {
            console.log('from listening is ' + msg.message);
            this.messages.unshift(msg.message);
            console.log(this.messages);
          });
    }
}
