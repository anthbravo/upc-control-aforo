import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { VisitedScreensComponent } from './visited-screens/visited-screens.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    LayoutComponent,
    VisitedScreensComponent,
  ],
  imports: [CommonModule, RouterModule, AngularMaterialModule],
})
export class LayoutModule {}
