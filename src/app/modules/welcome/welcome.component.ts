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
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Calificaciones',
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Cursos',
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Horario',
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Inasistencia',
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Historial Académico',
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Outlook 365',
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Noticias',
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Reservas',
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Accesos UPC',
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Campus',
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Control de Aforo',
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Mensajes',
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Notificaciones',
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Anuncios',
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Ajustes',
        iconName: 'control-aforo.png',
        url: '/welcome',
      },
      {
        description: 'Cerrar sesión',
        iconName: 'control-aforo.png',
        url: '/',
      },
    ];
  }
}
