import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaReuniaoPageRoutingModule } from './agenda-reuniao-routing.module';

import { AgendaReuniaoPage } from './agenda-reuniao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaReuniaoPageRoutingModule
  ],
  declarations: [AgendaReuniaoPage]
})
export class AgendaReuniaoPageModule {}
