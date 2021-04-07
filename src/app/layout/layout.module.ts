import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
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
  imports: [CommonModule, RouterModule, AngularMaterialModule],
})
export class LayoutModule {}
