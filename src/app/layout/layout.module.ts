import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { RoutesComponent } from './routes/routes.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    RoutesComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class LayoutModule {}
