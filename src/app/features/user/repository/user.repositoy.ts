import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { User } from "../../../models";
import { UserEntity } from "../../../shared/entities";
import { CreateUserDto } from "../dto";

export class UsersRepository {
  private _manager = DatabaseConnection.connection.manager;

  public async checkIfUserExistsByUsername(
    username: string
  ): Promise<User | null> {
    const existingUser = await this._manager.findOneBy(UserEntity, {
      username,
    });

    if (!existingUser) return null;

    return this.entityToModel(existingUser);
  }

  public async register(user: CreateUserDto): Promise<User> {
    const createUser = this._manager.create(UserEntity, { ...user });

    const createdUser = await this._manager.save(createUser);

    return this.entityToModel(createdUser);
  }

  private entityToModel(dataFromDB: UserEntity): User {
    return new User(dataFromDB.id, dataFromDB.username, dataFromDB.password);
  }
}
