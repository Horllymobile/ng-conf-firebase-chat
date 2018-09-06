import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Message } from '../../models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() userAuth: string;
  messages: Observable<Message[]>;
  messagesCollection: AngularFirestoreCollection<Message>;

  constructor(private store: AngularFirestore) { }

  ngOnInit() {
    this.messagesCollection = this.store.collection<Message>('messages', ref => ref.orderBy('timestamp'));
    this.messages = this.messagesCollection.valueChanges();
  }
}
