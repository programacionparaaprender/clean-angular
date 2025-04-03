import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserRepository } from '../../../domain/users/repositories/user.repository';
import { ResponseDto } from '../../dtos/response.dto';
import { User } from '../../../domain/users/entities/user.interface';
import { IMetaData } from '../../dtos/interfaces/metadata.interface';
import { IMessage } from '../../dtos/interfaces/message.interface'
import { HttpClient } from '@angular/common/http';
import { UserWriterRepository } from '../../../domain/users/repositories/user-writer-repository';
import { users, saveUser, updateUser } from '../../../shared/users';
@Injectable({
  providedIn: 'root',
})
export class UserWriterImplRepository extends UserWriterRepository {
  private users: User[] = users;
  constructor(private http: HttpClient) {
    super();
  }

  override update(params: User): Observable<ResponseDto<User>> {
    const index = this.users.findIndex(user => user.id === params.id);
    if (index !== -1) this.users[index] = params;
    updateUser(this.users);
    const message: IMessage = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "escritura"
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
    let responseDto = new ResponseDto(meta, params);
    return of(responseDto);
  }

  override create(params: User): Observable<ResponseDto<User>> {
    const message: IMessage = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "escritura"
    }
    let meta: IMetaData = {
      mensajes: [
        message
      ],
      totalRegistros: this.users.length,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    params.id = this.users.length + 1;
    //this.users.push(params);
    saveUser(params);
    let responseDto = new ResponseDto(meta, params);
    return of(responseDto);
  }

}
