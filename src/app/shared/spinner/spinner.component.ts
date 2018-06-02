import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-spinner',
    template: `
    <svg class="spinner" viewBox="0 0 50 50">
        <svg:circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></svg:circle>
    </svg>
  `,
    styles: [
        `
    .spinner {
        animation: rotate 2s linear infinite;
        z-index: 2;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -25px 0 0 -25px;
        width: 50px;
        height: 50px;
      }

      .path {
        stroke: #209cef;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
      }
      
      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }
      
      @keyframes dash {
        0% {
          stroke-dasharray: 1, 150;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 90, 150;
          stroke-dashoffset: -35;
        }
        100% {
          stroke-dasharray: 90, 150;
          stroke-dashoffset: -124;
        }
      }
      
    `
    ]
})
export class SpinnerComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
