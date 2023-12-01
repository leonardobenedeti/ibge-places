import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City, isCity } from 'src/app/services/ibge-service/ibge.interfaces';
import { IbgeService } from 'src/app/services/ibge-service/ibge.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.page.html',
  styleUrls: ['./city-details.page.scss'],
})
export class CityDetailsPage implements OnInit {

  public citySelected: City | null = null;

  public imageCity: string = '';
  public nameCity: string = '';
  public howManyLeos: string = '0';
  public lastRangeCity: string = '';

  constructor(
    private router: Router,
    private ibgeService: IbgeService,
  ) { }

  ngOnInit() {
    const currNav = this.router.getCurrentNavigation();
    if (currNav != null) {
      const city = currNav.extras.state?.['citySelected'];
      if (city != undefined && city != null && isCity(city)) {
        this.citySelected = city;

        this.imageCity = `https://servicodados.ibge.gov.br/api/v3/malhas/municipios/${this.citySelected.id}`;
        this.nameCity = this.citySelected.nome;

        this.loadNumberOfLeos(this.citySelected.id);
      }
    }
  }

  async loadNumberOfLeos(placeID: number) {
    this.ibgeService.getNumberOfLeos(placeID).subscribe(
      (result) => {
        console.log(result);
        let leoFrequency = 0;
        let lastRange = '';
        result[0].res.forEach((item) => {
          leoFrequency += item.frequencia;
          lastRange = item.periodo;
        });
        this.howManyLeos = leoFrequency.toString();
        this.lastRangeCity = lastRange.substring(6, lastRange.length - 1);
      },
      (err) => {
        console.log('NumberOfLeos error:', err);
      },
    );
  }

}
