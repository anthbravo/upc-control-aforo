import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@layout/layout/layout.component';
import { CampusSelectionContainer } from './containers/campus-selection/campus-selection.container';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'campus-selection', component: CampusSelectionContainer },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapacityControlRoutingModule {}
