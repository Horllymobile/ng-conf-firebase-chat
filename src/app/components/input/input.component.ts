import { Message } from './../../models/message.model';
import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';

import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() userAuth: string;

  constructor(private chat: ChatService) { }

  ngOnInit() {
  }

  sendOnEnter(event: KeyboardEvent): void {
    // if (event.keyCode === 13) {

    // }
  }

  sendMessage(message: string): void {
    if (message) {
      const messgeToSend: Message = {
        message: message,
        user: this.userAuth,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      };
      console.log('messgeToSend:', messgeToSend);
      this.chat.addMessage(messgeToSend);
    }
  }

}
