import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImgListComponent } from './img-list.component';

const routes: Routes = [
    {
        path: '',
        children: [{ path: '', component: ImgListComponent }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImgListRoutingModule {}
