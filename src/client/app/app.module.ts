import {Component, ViewChild, NgModule,ViewContainerRef, CUSTOM_ELEMENTS_SCHEMA, TemplateRef} from '@angular/core'

import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';



@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes),
		UsersModule,
		SharedModule.forRoot(),
		ModalModule.forRoot()
	],
	declarations: [AppComponent /*,CommonModalComponent*/ ],
	providers: [{
		provide: APP_BASE_HREF,
		useValue: '<%= APP_BASE %>'
	}],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
	bootstrap: [AppComponent]

})

export class AppModule {


}
