import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from '../../../../presentation/users/users/users.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListUseCase } from '../../../../application/users/usecases/user-list.usecase';
import { CreateUserUseCase } from '../../../../application/users/usecases/create-user.usecase'; 
import { UpdateUserUseCase } from '../../../../application/users/usecases/update-user.usecase';
import { DeleteUserUseCase } from '../../../../application/users/usecases/delete-user.usecase'; 
import { of } from 'rxjs';
import { User } from '../../../../domain/users/entities/user.interface'; 
import { ResponseDto } from '../../../../infraestructure/dtos/response.dto';
import { IMetaData } from '../../../../infraestructure/dtos/interfaces/metadata.interface';
import { IMessage } from '../../../../infraestructure/dtos/interfaces/message.interface';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userListUseCase: jasmine.SpyObj<UserListUseCase>;
  let createUserUseCase: jasmine.SpyObj<CreateUserUseCase>;
  let updateUserUseCase: jasmine.SpyObj<UpdateUserUseCase>;
  let deleteUserUseCase: jasmine.SpyObj<DeleteUserUseCase>;

  beforeEach(async () => {
    const userListSpy = jasmine.createSpyObj('UserListUseCase', ['execute']);
    const createUserSpy = jasmine.createSpyObj('CreateUserUseCase', ['execute']);
    const updateUserSpy = jasmine.createSpyObj('UpdateUserUseCase', ['execute']);
    const deleteUserSpy = jasmine.createSpyObj('DeleteUserUseCase', ['execute']);

    await TestBed.configureTestingModule({
      imports: [UsersComponent, FormsModule, ReactiveFormsModule],

      providers: [
        { provide: UserListUseCase, useValue: userListSpy },
        { provide: CreateUserUseCase, useValue: createUserSpy },
        { provide: UpdateUserUseCase, useValue: updateUserSpy },
        { provide: DeleteUserUseCase, useValue: deleteUserSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;

    userListUseCase = TestBed.inject(UserListUseCase) as jasmine.SpyObj<UserListUseCase>;
    createUserUseCase = TestBed.inject(CreateUserUseCase) as jasmine.SpyObj<CreateUserUseCase>;
    updateUserUseCase = TestBed.inject(UpdateUserUseCase) as jasmine.SpyObj<UpdateUserUseCase>;
    deleteUserUseCase = TestBed.inject(DeleteUserUseCase) as jasmine.SpyObj<DeleteUserUseCase>;
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe obtener usuarios en ngOnInit', async () => {
    const mockUsers: User[] = [
      { id: 1, name: 'Juan', email: 'juan@example.com' },
      { id: 2, name: 'Ana', email: 'ana@example.com' },
    ];
    const message: IMessage = {
          codigo: "001",
          mensaje: "satisfactorio",
          tipo: "lectura"
    }
    let meta: IMetaData = {
      mensajes: [
        message
      ],
      totalRegistros: mockUsers.length,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    let responseDto = new ResponseDto(meta, mockUsers);

    userListUseCase.execute.and.returnValue(of(responseDto));

    await component.ngOnInit();
    expect(component.users).toEqual(mockUsers);
  });

  it('Debe agregar un usuario', () => {
    
    const newUser: User = { id: 3, name: 'Pedro', email: 'pedro@example.com' };

    const message: IMessage = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "lectura"
    }
    let meta: IMetaData = {
      mensajes: [
        message
      ],
      totalRegistros: 2,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    let responseDto = new ResponseDto(meta, newUser);
    createUserUseCase.execute.and.returnValue(of(responseDto));

    component.newUser = newUser;
    component.saveUser();

    expect(createUserUseCase.execute).toHaveBeenCalledWith(newUser);
  });

  it('Debe actualizar un usuario', () => {
    const mockUsers: User[] = [
      { id: 1, name: 'Juan', email: 'juan@example.com' },
      { id: 2, name: 'Ana', email: 'ana@example.com' },
    ];
    const existingUser: User = { id: 1, name: 'Juan Modificado', email: 'juan@example.com' };
    
    const message: IMessage = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "lectura"
    }
    let meta: IMetaData = {
      mensajes: [
        message
      ],
      totalRegistros: mockUsers.length,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    let responseDto = new ResponseDto(meta, existingUser);
    updateUserUseCase.execute.and.returnValue(of(responseDto));

    component.newUser = existingUser;
    component.editing = true;
    component.saveUser();

    expect(updateUserUseCase.execute).toHaveBeenCalledWith(existingUser);
  });

  /* it('Debe eliminar un usuario', async () => {
    const userOne:User = { id: 1, name: 'Juan', email: 'juan@example.com' };
    const mockUsers: User[] = [
      userOne,
      { id: 2, name: 'Ana', email: 'ana@example.com' },
    ];
    const message: IMessage = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "lectura"
    }
    let meta: IMetaData = {
      mensajes: [
        message
      ],
      totalRegistros: mockUsers.length,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    let responseDto = new ResponseDto<User>(meta, userOne);
    deleteUserUseCase.execute.and.returnValue(of(responseDto));

    await component.deleteUser(1);
    expect(deleteUserUseCase.execute).toHaveBeenCalledWith(1);
  }); */

  it('Debe restablecer el formulario', () => {
    component.newUser = { id: 1, name: 'Ejemplo', email: 'ejemplo@example.com' };
    component.editing = true;

    component.resetForm();

    expect(component.newUser).toEqual({ id: 0, name: '', email: '' });
    expect(component.editing).toBeFalse();
  });
});
