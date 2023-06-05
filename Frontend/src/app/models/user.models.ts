export interface User {
  id: number;
  email: string;
  password: string;
}

export interface CreateUserDto extends Omit<User, 'id'> {}
