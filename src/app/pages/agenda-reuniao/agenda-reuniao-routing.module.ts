import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaReuniaoPage } from './agenda-reuniao.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaReuniaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaReuniaoPageRoutingModule {}
