import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { SpinnerComponent } from './spinner/spinner.component';

const modules = [CommonModule, ReactiveFormsModule];
const components = [BannerComponent, SpinnerComponent];
@NgModule({
    imports: [...modules],
    declarations: [...components],
    exports: [...modules, ...components]
})
export class SharedModule {}
