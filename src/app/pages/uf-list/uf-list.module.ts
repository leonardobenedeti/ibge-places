import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UfListPageRoutingModule } from './uf-list-routing.module';

import { IbgeService } from 'src/app/services/ibge-service/ibge.service';
import { UfListPage } from './uf-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UfListPageRoutingModule
  ],
  declarations: [UfListPage],
  providers: [IbgeService]
})
export class UfListPageModule { }
