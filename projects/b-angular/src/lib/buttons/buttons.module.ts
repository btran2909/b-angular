import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ButtonsComponent
    ],
    declarations: [
        ButtonsComponent
    ]
})
export class BTButtonsModule { }
