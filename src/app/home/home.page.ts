import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChatBoxComponent } from '../components/chat-box/chat-box.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}

  async openChatModal() {
    const modal = await this.modalController.create({
      component: ChatBoxComponent
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        console.log('Selected Chat from Modal:', result.data);
        
      }
    });

    return await modal.present();
  }

}
