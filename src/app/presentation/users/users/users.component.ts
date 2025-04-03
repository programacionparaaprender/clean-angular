import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../domain/users/entities/user.interface';
import { UserListUseCase } from '../../../application/users/usecases/user-list.usecase';
import { firstValueFrom } from 'rxjs';
import { CreateUserUseCase } from '../../../application/users/usecases/create-user.usecase';
import { UpdateUserUseCase } from '../../../application/users/usecases/update-user.usecase';
import { DeleteUserUseCase } from '../../../application/users/usecases/delete-user.usecase';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  newUser: User = { id: 0, name: '', email: '' };
  editing: boolean = false;
  userListUseCase: UserListUseCase = inject(UserListUseCase);
  createUserUseCase: CreateUserUseCase = inject(CreateUserUseCase);
  updateUserUseCase: UpdateUserUseCase = inject(UpdateUserUseCase);
  deleteUserUseCase: DeleteUserUseCase = inject(DeleteUserUseCase); 
  async ngOnInit() {
    const dates = await this.getUsers();
    this.users = dates;
  }

  async getUsers(){
    const response = await firstValueFrom(this.userListUseCase.execute());
    const datos = response.dates;
    return datos;
  }

  async saveUser() {
    if (this.editing) {
      this.updateUserUseCase.execute(this.newUser);
    } else {
      this.createUserUseCase.execute(this.newUser);
    }
    this.resetForm();
    const dates = await this.getUsers();
    this.users = dates;
  }

  editUser(user: User) {
    this.newUser = { ...user };
    this.editing = true;
  }

  async deleteUser(id: number) {
    this.deleteUserUseCase.execute(id);
    this.users = await this.getUsers();
    console.log('deleteUser');
    console.log(this.users);
  }

  resetForm() {
    this.newUser = { id: 0, name: '', email: '' };
    this.editing = false;
  }
}
