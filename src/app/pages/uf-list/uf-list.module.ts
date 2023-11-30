import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UfListPageRoutingModule } from './uf-list-routing.module';

import { UfListPage } from './uf-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UfListPageRoutingModule
  ],
  declarations: [UfListPage]
})
export class UfListPageModule {}
