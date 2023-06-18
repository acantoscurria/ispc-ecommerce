export interface User {
  id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
}

export interface CreateUserDto extends Omit<User, 'id'> {}
