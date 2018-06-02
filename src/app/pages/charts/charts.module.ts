import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';

import { ChartsRoutingModule } from './charts-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ScatterComponent } from './scatter/scatter.component';
import { AreaComponent } from './area/area.component';

const components = [ScatterComponent, AreaComponent];
@NgModule({
    imports: [ChartsRoutingModule, SharedModule, ChartModule],
    declarations: [...components]
})
export class ChartsModule {}
