import { UserUseCase } from "@/core/application/use-cases/user/user.use-case";
import { BadParamsException } from "@/core/domain/errors/common.error";
import { UserCreate, UserCreateSchema } from "@/core/domain/models/user.model";

export class UserController {
    private _userUseCase: UserUseCase;

    constructor(userUserCase: UserUseCase) {
        this._userUseCase = userUserCase;
    }

    async signUp(payload: UserCreate) {
        const { data, error: payloadError } = UserCreateSchema.safeParse(payload)
        if (payloadError) throw new BadParamsException(payloadError.message);

        const user = await this._userUseCase.signUpUser(data);
        // todo DTO USER
        return user;
    }
}