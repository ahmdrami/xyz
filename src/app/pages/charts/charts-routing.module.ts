import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScatterComponent } from './scatter/scatter.component';
import { ChartsService } from './charts.service';
import { AreaComponent } from './area/area.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {path: 'scatter', component: ScatterComponent },
            {path: 'area', component: AreaComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ChartsService]
})
export class ChartsRoutingModule {}
