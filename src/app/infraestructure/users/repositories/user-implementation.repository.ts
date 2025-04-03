import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserRepository } from '../../../domain/users/repositories/user.repository';
import { ResponseDto } from '../../dtos/response.dto';
import { User } from '../../../domain/users/entities/user.interface';
import { IMetaData } from '../../dtos/interfaces/metadata.interface';
import { IMessage } from '../../dtos/interfaces/message.interface'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  private users: User[] = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
    { id: 2, name: 'María López', email: 'maria@example.com' },
  ];
  constructor(private http: HttpClient) {
    super();
  }

  override getUser(id: number): Observable<ResponseDto<User>> {
    const user = this.users.find(x=>x.id == id) as User;
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
      totalRegistros: this.users.length,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    let responseDto = new ResponseDto(meta, this.users);
    return of(responseDto);
  }

  override update(params: User): Observable<ResponseDto<User>> {
    const index = this.users.findIndex(user => user.id === params.id);
    if (index !== -1) this.users[index] = params;

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
    this.users.push(params);
    let responseDto = new ResponseDto(meta, params);
    return of(responseDto);
  }

  override deleteUser(id: number): Observable<ResponseDto<User>> {
    const message: IMessage = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "eliminación"
    }
    let meta: IMetaData = {
      mensajes: [
        message
      ],
      totalRegistros: this.users.length - 1,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    const user = this.users.find(x=>x.id == id) as User;
    this.users = this.users.filter(user => user.id !== id);
    let responseDto = new ResponseDto(meta, user);
    return of(responseDto);
  }
}
