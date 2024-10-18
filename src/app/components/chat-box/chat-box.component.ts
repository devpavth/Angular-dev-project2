import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent  implements OnInit {
  selectedSegment: string = 'chat';

  public data = [
    { name: 'Connor Smith', role: 'Sales Rep', img: 'https://i.pravatar.cc/300?u=b' },
    { name: 'Daniel Smith', role: 'Product Designer', img: 'https://i.pravatar.cc/300?u=a' },
    { name: 'Greg Smith', role: 'Director of Operations', img: 'https://i.pravatar.cc/300?u=d' },
    { name: 'Zoey Smith', role: 'CEO', img: 'https://i.pravatar.cc/300?u=e' },
  ];

  public results = [...this.data];

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.name.toLowerCase().includes(query));
  }

  constructor(private modalController: ModalController) { }

  closeModal(){
    this.modalController.dismiss();
  }

  ngOnInit() {}

}
