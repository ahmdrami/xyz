import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts.service';
import { area_options } from './area';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-area',
    templateUrl: './area.component.html',
    styles: []
})
export class AreaComponent implements OnInit {

    area = null;
    loading = true;
    constructor(
        private chartSvc: ChartsService
    ) {}

    ngOnInit() {

        this.chartSvc.getData('area').subscribe((resp: any[]) => {
            this.loading = false;
            area_options.series = resp;
              this.area = new Chart(area_options);
        }, error => console.log(error));
    }
}
