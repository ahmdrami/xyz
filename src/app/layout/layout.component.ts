import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `,
    styles: []
})
export class LayoutComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
