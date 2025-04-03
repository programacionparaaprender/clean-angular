import { Constants } from '../../../shared/constants';
//0 Inactivo
//1 Activo
//2 Pendiente
export class UserDto {
  id?: number;
  name: string;
  email: string;
  constructor(
    id: number = Constants.ZERO,
    name: string = Constants.EMPTY,
    email: string = Constants.EMPTY
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
