import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatInputModule, MatCheckboxModule],
  exports: [MatInputModule, MatCheckboxModule],
})
export class AngularMaterialModule {}
