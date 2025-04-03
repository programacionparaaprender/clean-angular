import { UserRepository } from '../../../domain/users/repositories/user.repository';
import { UserImplementationRepository } from '../../../infraestructure/users/repositories/user-implementation.repository';

import { GetUserUseCase } from './get-user.usecase';
const userGetCaseFactory = (userRepo: UserRepository) =>
  new GetUserUseCase(userRepo);
export const getUserUseCaseProvider = {
  provide: GetUserUseCase,
  useFactory: userGetCaseFactory,
  deps: [UserRepository],
};

import { UserListUseCase } from './user-list.usecase';
const userAllCaseFactory = (userRepo: UserImplementationRepository) =>
  new UserListUseCase(userRepo);
export const userListUseCaseProvider = {
  provide: UserListUseCase,
  useFactory: userAllCaseFactory,
  deps: [UserRepository],
};

import { CreateUserUseCase } from './create-user.usecase';
const userCreateCaseFactory = (userRepo: UserImplementationRepository) =>
  new CreateUserUseCase(userRepo);
export const userCreateCaseProvider = {
  provide: CreateUserUseCase,
  useFactory: userCreateCaseFactory,
  deps: [UserRepository],
};

import { UpdateUserUseCase } from './update-user.usecase';
const userUpdateCaseFactory = (userRepo: UserImplementationRepository) =>
  new UpdateUserUseCase(userRepo);
export const userUpdateCaseProvider = {
  provide: UpdateUserUseCase,
  useFactory: userUpdateCaseFactory,
  deps: [UserRepository],
};

import { DeleteUserUseCase } from './delete-user.usecase';

const userDeleteCaseFactory = (userRepo: UserImplementationRepository) =>
  new DeleteUserUseCase(userRepo);
export const userDeleteCaseProvider = {
  provide: DeleteUserUseCase,
  useFactory: userDeleteCaseFactory,
  deps: [UserRepository],
};
