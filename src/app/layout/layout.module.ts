import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const components = [LayoutComponent, NavComponent, ProfileComponent];
@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [...components],
    exports: [LayoutComponent]
})
export class LayoutModule {}
