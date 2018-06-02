import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-banner',
    template: `
    <section class="hero is-light">
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-capitalized">
                    {{ title }}
                </h1>
            </div>
        </div>
    </section>
  `,
    styles: [`
        .hero {
            margin-bottom: 5em;
        }
    `]
})
export class BannerComponent implements OnInit {
    title: string;
    constructor(private router: Router) {}

    ngOnInit() {
        this.title = this.getTitle(this.router.url);
    }

    private getTitle(url: string): string {
        return url.replace(/[^a-zA-Z]/g, ' ');
    }
}
