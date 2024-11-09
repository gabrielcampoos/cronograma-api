import { bcrypt, jwt } from "../../../shared/utils";
import { Result, ResultDto } from "../../../shared/utils/result.helper";
import { LoginUserDto } from "../dto";
import { UsersRepository } from "../repository";

export class LoginUserUsecase {
  public async execute(data: LoginUserDto): Promise<ResultDto> {
    const repository = new UsersRepository();

    const existingUser = await repository.checkIfUserExistsByUsername(
      data.username
    );

    if (!existingUser) {
      return Result.error(404, "User not found.");
    }

    const isPasswordValid = await bcrypt.compareHash(
      data.password,
      existingUser.getPassword()
    );

    if (!isPasswordValid) {
      return Result.error(401, "Invalid username or password.");
    }

    const userData = existingUser.toJson();
    const token = jwt.encoded(userData);

    return Result.success(200, "User logged in successfully.", {
      ...userData,
      token,
    });
  }
}
