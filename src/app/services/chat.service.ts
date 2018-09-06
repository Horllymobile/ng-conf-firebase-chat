import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { Message } from './../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: AngularFirestoreCollection<Message>;

  constructor(private store: AngularFirestore) {
    this.messages = this.store.collection<Message>('messages');
  }

  addMessage(message: Message): void {
    this.messages.add(message);
  }
}
