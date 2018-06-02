import { NgModule } from '@angular/core';

import { ImgListRoutingModule } from './img-list-routing.module';
import { ImgListComponent } from './img-list.component';
import { ImgDetailComponent } from './img-detail/img-detail.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ImgListRoutingModule
  ],
  declarations: [ImgListComponent, ImgDetailComponent]
})
export class ImgListModule { }
