import { UserController } from "@/core/application/controllers/auth/user.controller";
import { UserUseCase } from "@/core/application/use-cases/user/user.use-case";
import { IUserRepository } from "@/core/application/interfaces/repository/user-repo.interface";
import { IAuthService } from "@/core/application/interfaces/service/auth-service.interface";

export const SYMBOLS = {
    // repository
    IUserRepository: Symbol.for('IUserRepository'),

    // services
    IAuthService: Symbol.for('IAuthService'),

    // use cases
    UserUseCase: Symbol.for('UserUseCase'),

    // controllers
    UserController: Symbol.for('UserController'),
};


export type DI_TYPES = {
    // repository
    IUserRepository: IUserRepository,

    // services
    IAuthService: IAuthService,

    // use cases
    UserUseCase: UserUseCase,

    // controllers
    UserController: UserController,
}