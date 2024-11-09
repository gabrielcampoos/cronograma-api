import { Base } from "./Base";

export interface UserJson {
  id: string;
  username: string;
}

export class User extends Base {
  constructor(
    _id: string,
    private _username: string,
    private _password: string
  ) {
    super(_id);
  }

  toJson(): UserJson {
    return {
      id: this._id,
      username: this._username,
    };
  }

  getId(): string {
    return this._id;
  }

  setId(id: string): void {
    this._id = id;
  }

  getUsername(): string {
    return this._username;
  }

  setUsername(username: string): void {
    this._username = username;
  }

  getPassword(): string {
    return this._password;
  }

  setPassword(password: string): void {
    this._password = password;
  }
}
