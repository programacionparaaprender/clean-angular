import { Injectable } from '@angular/core';
import { UseCase } from '../../../domain/usecases/usecase';
import { ResponseDto } from '../../../infraestructure/dtos/response.dto';
import { UserDto } from '../../../infraestructure/users/dtos/user.dto';
import { Observable } from 'rxjs';
import { UserReportRepository } from '../../../domain/users/repositories/user-report-repository';
import { UserReportImplRepository } from '../../../infraestructure/users/repositories/user-report-impl.repository';

@Injectable({
  providedIn: 'root',
})
export class GetUserUseCase implements UseCase<number, ResponseDto<UserDto>> {
  constructor(private userRepository: UserReportImplRepository) {}
  public execute(id: number): Observable<ResponseDto<UserDto>> {
    return this.userRepository.getUser(id);
  }
}
