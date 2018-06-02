import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blank',
    template: `
    <section class="hero is-light">
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-capitalized">
                    404 Not found 
                </h1>
                <a routerLink="/login">Please login</a>
            </div>
        </div>
    </section>
  `,
    styles: []
})
export class BlankComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
