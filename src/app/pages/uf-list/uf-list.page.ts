import { Component, OnInit } from '@angular/core';
import { UF } from 'src/app/services/ibge-service/ibge.interfaces';
import { IbgeService } from 'src/app/services/ibge-service/ibge.service';

@Component({
  selector: 'app-uf-list',
  templateUrl: './uf-list.page.html',
  styleUrls: ['./uf-list.page.scss'],
})
export class UfListPage implements OnInit {

  public ufList: UF[] = [];

  constructor(private ibgeService: IbgeService) { }

  ngOnInit() {
    this.loadUF();
  }

  async loadUF() {
    this.ibgeService.getUF().subscribe(
      (res) => {
        this.ufList.push(...res);
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
    );
  }

}
