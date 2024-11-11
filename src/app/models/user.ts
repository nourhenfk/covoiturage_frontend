export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  role?: string;

  constructor(
    id: number = 0,
    username: string = '',
    email: string = '',
    password: string = '',
    role?: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    if (typeof role !== 'undefined') {
      this.role = role;
    }
  }
}
