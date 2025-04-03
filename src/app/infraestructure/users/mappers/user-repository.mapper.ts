import { Mapper } from '../../../domain/mappers/mapper';
import { UserDto } from '../dtos/user.dto';
import { UserEntity } from '../../../domain/users/entities/user.entity';
import { Constants } from '../../../shared/constants';

export class UserImplementationRepositoryMapper extends Mapper<
  UserEntity,
  UserDto
> {
  override mapFroms(param: UserEntity[]): UserDto[] {
    const usersDto: UserDto[] = [];
    for (const userEntity of param) {
      const userTemporary = this.mapFrom(userEntity);
      usersDto.push(userTemporary);
    }
    return usersDto;
  }
  mapTos(param: UserDto[]): UserEntity[] {
    const usersEntities: UserEntity[] = [];
    for (const userDto of param) {
      const temporary = this.mapTo(userDto);
      usersEntities.push(temporary);
    }
    return usersEntities;
  }
  mapFrom(param: UserEntity): UserDto {
    const id = param.id;
    const nombre = param.name;
    const email = param.email;
    const userModel: UserDto = {
      id: id,
      name: nombre,
      email: email
    };
    return userModel;
  }
  mapTo(param: UserDto): UserEntity {
    const id = param.id;
    const nombre = param.name;
    const email = param.email;
    const userEntity: UserEntity = new UserEntity(id, nombre, email);
    return userEntity;
  }
}
