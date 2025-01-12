import { createModule } from "@evyweb/ioctopus"
import { SYMBOLS } from "@/core/di/di.type"

import { AuthServiceMock } from "@/core/infra/services/auth/auth.service.mock";

import { UserController } from "@/core/application/controllers/auth/user.controller";

import { UserUseCase } from "@/core/application/use-cases/user/user.use-case";

export function createAuthModule() {
    const authModule = createModule();

    authModule
        .bind(SYMBOLS.UserController)
        .toClass(UserController, [
            SYMBOLS.UserUseCase
        ])

    authModule
        .bind(SYMBOLS.UserUseCase)
        .toClass(UserUseCase, [
            SYMBOLS.IUserRepository,
            SYMBOLS.IAuthService
        ])

    if (process.env.NODE_ENV === 'test') {
        authModule
            .bind(SYMBOLS.IAuthService)
            .toClass(AuthServiceMock, [SYMBOLS.IUserRepository])
    }

    return authModule
}