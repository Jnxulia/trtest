import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  moduleId: module.id,
	selector: 'modal-test',
	templateUrl: 'modal.component.html'
})


export class ModalContentComponent   {
  public title: string;
  public list: any[] = [];
  constructor(public bsModalRef: BsModalRef) {}
}
