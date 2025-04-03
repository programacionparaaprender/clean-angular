import { Routes } from '@angular/router';
import { UsersComponent } from './presentation/users/users/users.component';
import { Constants } from './shared/constants';
export const routes: Routes = [
  { path: '', component: UsersComponent},
  { path: 'users', component: UsersComponent}
];
