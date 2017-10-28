import { Routes } from '@angular/router';

import { UsersRoutes } from './users/index';
import { UsersComponent } from './users/users.component';
export const routes: Routes = [
	...UsersRoutes
	,
{ path: '**', component: UsersComponent }
];
