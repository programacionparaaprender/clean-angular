import { Injectable } from '@angular/core';
import { UseCase } from '../../../domain/usecases/usecase';
import { ResponseDto } from '../../../infraestructure/dtos/response.dto';
import { UserDto } from '../../../infraestructure/users/dtos/user.dto';
import { UserRepository } from '../../../domain/users/repositories/user.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetUserUseCase implements UseCase<number, ResponseDto<UserDto>> {
  constructor(private userRepository: UserRepository) {}
  public execute(id: number): Observable<ResponseDto<UserDto>> {
    return this.userRepository.getUser(id);
  }
}
