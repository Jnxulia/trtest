
import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { UsersService } from '../services/users.service';

import { UsersModel } from '../models/users.model';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';


@Component({
	moduleId: module.id,
	selector: 'users-cmp',
	templateUrl: 'users.component.html',
	providers: [UsersService,UsersModel]
})

export class UsersComponent {
	users : UsersModel[];
	modalRef: BsModalRef;
	currentUser : UsersModel;
	constructor(private userService: UsersService, private modalService: BsModalService) {
			this.showUsers();

	}
	showUsers(){
		this.userService.getNextPage()
		.subscribe(users => this.users =  users);

	}
	public openModal(template: TemplateRef<any> , user : UsersModel , title : string) {
    this.modalRef = this.modalService.show(template);
		this.modalRef.user = user;
		this.modalRef.title = title;
  }
	public add(template: TemplateRef<any> ) {

		this.openModal(template, new UsersModel, "Agregar Nuevo Contacto")
	}
	public edit(template: TemplateRef<any> , user) {
		console.log(user);
		this.openModal(template,user, "Editar Contacto");
	}

}
