import { Observable } from 'rxjs';
import { ResponseDto } from '../../../infraestructure/dtos/response.dto';
import { User } from '../entities/user.interface';
import { Injectable } from '@angular/core';

export abstract class UserWriterRepository {
  abstract create(params: User): Observable<ResponseDto<User>>;
  abstract update(params: User): Observable<ResponseDto<User>>;
}
