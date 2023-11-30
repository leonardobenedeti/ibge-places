import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { UF } from 'src/app/services/ibge-service/ibge.interfaces';
import { IbgeService } from 'src/app/services/ibge-service/ibge.service';

@Component({
  selector: 'app-uf-list',
  templateUrl: './uf-list.page.html',
  styleUrls: ['./uf-list.page.scss'],
})
export class UfListPage implements OnInit {

  public ufList: UF[] = [];

  constructor(
    private ibgeService: IbgeService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadUF();
  }

  async loadUF() {
    this.ibgeService.getUF().subscribe(
      (res) => {
        this.ufList.push(...res);
        console.log('UF result:', res);
      },
      (err) => {
        console.log('UF error:', err);
      },
    );
  }

  public selectUF(uf: UF) {
    let navigationExtras: NavigationExtras = {
      state: {
        ufSelected: uf,
      }
    };
    this.router.navigateByUrl('/cities', navigationExtras);
  }

}
