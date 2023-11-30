import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UfListPage } from './uf-list.page';

const routes: Routes = [
  {
    path: '',
    component: UfListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UfListPageRoutingModule {}
