import { Constants } from '../../../shared/constants';
export class UserEntity {
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
