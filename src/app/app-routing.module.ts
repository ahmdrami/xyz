import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './core/auth.guard';
import { OverviewComponent } from './pages/overview/overview.component';
import { BlankComponent } from './pages/blank/blank.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: OverviewComponent },
            { path: 'charts', loadChildren: './pages/charts/charts.module#ChartsModule' },
            { path: 'post-list', loadChildren: './pages/img-list/img-list.module#ImgListModule'}
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', component: BlankComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
