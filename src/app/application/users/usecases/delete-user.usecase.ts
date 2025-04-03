import { Injectable } from '@angular/core';
import { UseCase } from '../../../domain/usecases/usecase';
import { ResponseDto } from '../../../infraestructure/dtos/response.dto';
import { UserDto } from '../../../infraestructure/users/dtos/user.dto';
import { UserRepository } from '../../../domain/users/repositories/user.repository';
import { Observable } from 'rxjs';
import { User } from '../../../domain/users/entities/user.interface';
import { UserImplementationRepository } from '../../../infraestructure/users/repositories/user-implementation.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteUserUseCase
  implements UseCase<number, ResponseDto<User>>
{
  constructor(private userRepository: UserImplementationRepository) {}
  public execute(param: number): Observable<ResponseDto<User>> {
    return this.userRepository.deleteUser(param);
  }
}
