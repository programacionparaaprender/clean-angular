import { Observable } from 'rxjs';
import { ResponseDto } from '../../../infraestructure/dtos/response.dto';
import { User } from '../entities/user.interface';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export abstract class UserReportRepository {
  abstract getUserList(): Observable<ResponseDto<User[]>>;
  abstract getUser(id: number): Observable<ResponseDto<User>>;
}
