import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { CourseContentComponent } from '../components/course-content/course-content.component';
import { TabsContentComponent } from '../components/tabs-content/tabs-content.component';
import { ChatBoxComponent } from '../components/chat-box/chat-box.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CourseContentComponent, TabsContentComponent, ChatBoxComponent]
})
export class HomePageModule {}
