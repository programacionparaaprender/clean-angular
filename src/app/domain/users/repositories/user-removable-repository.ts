import { Observable } from 'rxjs';
import { ResponseDto } from '../../../infraestructure/dtos/response.dto';
import { User } from '../entities/user.interface';
import { Injectable } from '@angular/core';

export abstract class UserRemovableRepository {
  abstract deleteUser(id: number): Observable<ResponseDto<User>>;
}
