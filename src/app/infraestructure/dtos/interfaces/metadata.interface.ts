import { IMessage } from './message.interface';

export interface IMetaData {
  mensajes: IMessage[];
  totalRegistros: number;
  idTransaccion: string;
  numeroPaginaSiguiente: string;
  numeroTotalPaginas: string;
}
