import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/index';
import { FooterComponent } from '../shared/index';
//import { ModalContentComponent} from './modal/index'
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [HeaderComponent ,FooterComponent ,UsersComponent, /*ModalContentComponent*/ ],
    exports: [UsersComponent , ]
})

export class UsersModule { }
