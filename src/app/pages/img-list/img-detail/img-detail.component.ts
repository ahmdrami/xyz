import { Component, Input } from '@angular/core';
import { ImgModel } from './img';

@Component({
  selector: 'app-img-detail',
  templateUrl: './img-detail.component.html',
  styles: []
})
export class ImgDetailComponent {

  @Input() post: ImgModel;
}
