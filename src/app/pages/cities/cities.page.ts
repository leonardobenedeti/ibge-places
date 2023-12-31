import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { City, UF, isUF } from 'src/app/services/ibge-service/ibge.interfaces';
import { IbgeService } from 'src/app/services/ibge-service/ibge.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  public ufSelected: UF | null = null;
  public cities: City[] = [];

  public ufName: String = '';
  public ufSigla: String = '';

  constructor(
    private router: Router,
    private ibgeService: IbgeService,
  ) { }

  ngOnInit() {
    const currNav = this.router.getCurrentNavigation();
    if (currNav != null) {
      const uf = currNav.extras.state?.['ufSelected'];
      if (uf != undefined && uf != null && isUF(uf)) {
        this.ufSelected = uf;
        this.ufName = `${uf.nome}`;
        this.ufSigla = `${uf.sigla}`;
      }
    }

    if (this.ufSelected != null) {
      this.loadCities(this.ufSelected.sigla);
    }
  }

  async loadCities(ufID: String) {
    this.ibgeService.getCities(ufID).subscribe(
      (res) => {
        this.cities.push(...res);
      },
      (err) => {
        console.log('Cities error:', err);
      },
    );
  }

  public selectCity(city: City) {
    let navigationExtras: NavigationExtras = {
      state: {
        citySelected: city,
      }
    };
    this.router.navigateByUrl('/city-details', navigationExtras);
  }

}

