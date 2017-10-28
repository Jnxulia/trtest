import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../shared/index';
@Injectable()

export class UsersService {
      page  : number = 0;
      limit  :  number = 10;

    constructor(private http: Http) {
        console.log (Config);
    }

    getUsers() {
        return this.http.get(Config.API + 'users?_page='+this.page+'&_limit='+this.limit)
        .map(res => res.json());
    }
    getNextPage(){
      this.page++;
      return this.getUsers();
    }
    getPreviousPage(){
      this.page--;
      return this.getUsers();
    }
}
