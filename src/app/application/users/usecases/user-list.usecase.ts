import { Injectable } from '@angular/core';
import { UseCase } from '../../../domain/usecases/usecase';
import { ResponseDto } from '../../../infraestructure/dtos/response.dto';
import { UserRepository } from '../../../domain/users/repositories/user.repository';
import { Observable } from 'rxjs';
import { User } from '../../../domain/users/entities/user.interface';
import { UserReportRepository } from '../../../domain/users/repositories/user-report-repository';
import { UserReportImplRepository } from '../../../infraestructure/users/repositories/user-report-impl.repository';

@Injectable({
  providedIn: 'root',
})
export class UserListUseCase implements UseCase<null, ResponseDto<User[]>> {
  constructor(private userRepository: UserReportImplRepository) {}
  public execute(): Observable<ResponseDto<User[]>> {
    return this.userRepository.getUserList();
  }
}
