import { Observable } from 'rxjs';
import { ResponseDto } from '../../../infraestructure/dtos/response.dto';
import { User } from '../entities/user.interface';
import { Injectable } from '@angular/core';

export abstract class UserRepository {
  abstract create(params: User): Observable<ResponseDto<User>>;
  abstract update(params: User): Observable<ResponseDto<User>>;
  abstract getUserList(): Observable<ResponseDto<User[]>>;
  abstract deleteUser(id: number): Observable<ResponseDto<User>>;
  abstract getUser(id: number): Observable<ResponseDto<User>>;
}
