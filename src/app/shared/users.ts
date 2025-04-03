import { User } from "../domain/users/entities/user.interface";

export let users = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
    { id: 2, name: 'María López', email: 'maria@example.com' },
];

export function updateUser(usersTemp:User[]) {
    users = usersTemp;
    return usersTemp;
}

export function saveUser(user:User) {
    users.push(user);
    return user;

}

export function deleteUser(usersTemp:User[]) {
    users = usersTemp;
    console.log('users delete');
    console.log(users);
    return usersTemp;
}