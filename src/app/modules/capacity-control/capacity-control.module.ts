import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@layout/layout.module';
import { CapacityControlRoutingModule } from './capacity-control-routing.module';
import { CampusSelectionComponent } from './components/campus-selection/campus-selection.component';
import { CampusSelectionContainer } from './containers/campus-selection/campus-selection.container';

@NgModule({
  declarations: [CampusSelectionContainer, CampusSelectionComponent],
  imports: [CommonModule, CapacityControlRoutingModule, LayoutModule],
})
export class CapacityControlModule {}
