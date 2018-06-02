import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';

const components = [LayoutComponent, NavComponent];
@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [...components],
    exports: [LayoutComponent]
})
export class LayoutModule {}
