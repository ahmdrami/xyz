import { Component, OnInit } from '@angular/core';
import { scatter_options } from './scatter';
import { ChartsService } from '../charts.service';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-scatter',
    templateUrl: './scatter.component.html',
    styles: []
})
export class ScatterComponent implements OnInit {
    scatter = null;
    loading = true;
    constructor(
      private chartSvc: ChartsService
    ) {}

    ngOnInit() {

      this.chartSvc.getData('scatter').subscribe((resp: any[]) => {
          this.loading = false;
          scatter_options.series = resp;
            this.scatter = new Chart(scatter_options);
      }, error => console.log(error));

    }
}
