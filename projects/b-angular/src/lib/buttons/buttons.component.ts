import { Component, Input } from '@angular/core';

@Component({
    selector: 'bt-button',
    templateUrl: './buttons.component.html'
})
export class ButtonsComponent {
    @Input() bClass: any[] | string = '';
    @Input() bLabel: any[] | string = 'Button';
    constructor() { }
}
