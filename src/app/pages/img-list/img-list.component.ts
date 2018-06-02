import { Component, OnInit } from '@angular/core';
import { ImgModel } from './img-detail/img';
import { ImgListService } from './img-list.service';
import { style, animate, transition, state, trigger, query, animateChild, stagger } from '@angular/animations';


@Component({
    selector: 'app-img-list',
    template: `
    <app-banner></app-banner>
    <div class="container">
    <div *ngIf="!loading; else spinner" class="columns is-multiline" @list>
        <app-img-detail class="column is-4" @posts *ngFor="let post of posts" [post]="post"> </app-img-detail>
        </div>
        <ng-template #spinner>
            <app-spinner></app-spinner>
        </ng-template>
    </div>
  `,
    animations: [
        trigger('list', [
            transition(':enter', [
                query('@posts', stagger(300, animateChild()))
            ])
        ]),
        trigger('posts', [
            transition(':enter', [
                style({ transform: 'scale(0.5)', opacity: 0 }),
                animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', style({ transform: 'scale(1)', opacity: 1 }))
            ]),
            transition(':leave', [
                style({ transform: 'scale(1)', opacity: 1, height: '*' }),
                animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
            ])
        ])
    ]
})
export class ImgListComponent implements OnInit {
    posts: ImgModel[];
    loading = true;
    constructor(private imgSvc: ImgListService) {}

    ngOnInit() {
        this.imgSvc.getPosts().subscribe(
            resp => {
                this.loading = false;
                this.posts = resp;
            },
            err => console.log(err)
        );
    }
}
