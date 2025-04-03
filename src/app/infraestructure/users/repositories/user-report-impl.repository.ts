import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserRepository } from '../../../domain/users/repositories/user.repository';
import { ResponseDto } from '../../dtos/response.dto';
import { User } from '../../../domain/users/entities/user.interface';
import { IMetaData } from '../../dtos/interfaces/metadata.interface';
import { IMessage } from '../../dtos/interfaces/message.interface'
import { HttpClient } from '@angular/common/http';
import { UserReportRepository } from '../../../domain/users/repositories/user-report-repository';
import { users } from '../../../shared/users';


@Injectable({
  providedIn: 'root',
})
export class UserReportImplRepository extends UserReportRepository {
  //private users: User[] = users;
  constructor(private http: HttpClient) {
    super();
  }

  override getUser(id: number): Observable<ResponseDto<User>> {
    const user = users.find(x=>x.id == id) as User;
    const message: IMessage = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "lectura"
    }
    let meta: IMetaData = {
      mensajes: [
        message
      ],
      totalRegistros: 1,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    let responseDto = new ResponseDto(meta, user);
    return of(responseDto);
  }

  override getUserList(): Observable<ResponseDto<User[]>> {
    const message: IMessage = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "lectura"
    }
    let meta: IMetaData = {
      mensajes: [
        message
      ],
      totalRegistros: users.length,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    let responseDto = new ResponseDto(meta, users);
    return of(responseDto);
  }
}
