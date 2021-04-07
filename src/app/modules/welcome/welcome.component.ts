import { Component, OnInit } from '@angular/core';
import { MenuOption } from 'src/app/core/model/menu-option';

@Component({
  selector: 'upc-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  menu: MenuOption[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu() {
    this.menu = [
      {
        description: 'Perfil',
        iconName: 'profile.png',
        url: '/welcome',
      },
      {
        description: 'Calificaciones',
        iconName: 'score.png',
        url: '/welcome',
      },
      {
        description: 'Cursos',
        iconName: 'courses.png',
        url: '/welcome',
      },
      {
        description: 'Horario',
        iconName: 'schedule.png',
        url: '/welcome',
      },
      {
        description: 'Inasistencia',
        iconName: 'absences.png',
        url: '/welcome',
      },
      {
        description: 'Historial Académico',
        iconName: 'academic-record.png',
        url: '/welcome',
      },
      {
        description: 'Outlook 365',
        iconName: 'outlook-365.png',
        url: '/welcome',
      },
      {
        description: 'Noticias',
        iconName: 'news.png',
        url: '/welcome',
      },
      {
        description: 'Reservas',
        iconName: 'bookings.png',
        url: '/welcome',
      },
      {
        description: 'Accesos UPC',
        iconName: 'upc-accesses.png',
        url: '/welcome',
      },
      {
        description: 'Campus',
        iconName: 'campus.png',
        url: '/welcome',
      },
      {
        description: 'Control de Aforo',
        iconName: 'capacity-control.png',
        url: '/capacity-control/campus-selection',
      },
      {
        description: 'Mensajes',
        iconName: 'messages.png',
        url: '/welcome',
      },
      {
        description: 'Notificaciones',
        iconName: 'notifications.png',
        url: '/welcome',
      },
      {
        description: 'Anuncios',
        iconName: 'advertisements.png',
        url: '/welcome',
      },
      {
        description: 'Ajustes',
        iconName: 'settings.png',
        url: '/welcome',
      },
      {
        description: 'Cerrar sesión',
        iconName: 'sign-off.png',
        url: '/',
      },
    ];
  }
}
