import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agenda-reuniao',
  templateUrl: './agenda-reuniao.page.html',
  styleUrls: ['./agenda-reuniao.page.scss'],
  standalone: false
})
export class AgendaReuniaoPage {
  usuario: any = null;

  reuniao = {
    titulo: '',
    data_hora: '',
    local: ''
  };


  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  ionViewWillEnter() {
    const user = localStorage.getItem('usuario');
    if (!user) {
      this.navCtrl.navigateRoot('/login');
    } else {
      this.usuario = JSON.parse(user);
    }
  }

  salvar() {
    const payload = {
      ...this.reuniao,
      usuario_id: this.usuario.id
    };

    this.http.post('http://localhost:3000/reunioes', payload).subscribe({
      next: () => {
        this.showToast('Reunião agendada com sucesso', 'success');
        this.reuniao = { titulo: '', data_hora: '', local: '' };
      },
      error: () => this.showToast('Erro ao salvar reunião'),
    });
  }

  logout() {
    localStorage.removeItem('usuario');
    this.navCtrl.navigateRoot('/login');
  }

  async showToast(msg: string, color: string = 'danger') {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color,
    });
    toast.present();
  }
}
