import { Message } from './../../models/message.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as firebase from 'firebase';

import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() userAuth: string;
  @ViewChild('chatMessage') input: ElementRef;

  constructor(private chat: ChatService) { }

  ngOnInit() {
  }

  sendOnEnter(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this.sendMessage(this.input.nativeElement.value);
    }
  }

  sendMessage(message: string): void {
    if (message) {
      const messgeToSend: Message = {
        message: message,
        user: this.userAuth,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      } as any;
      this.chat.addMessage(messgeToSend);
      this.input.nativeElement.value = '';
    }
  }

}
