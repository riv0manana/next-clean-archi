import { createModule } from "@evyweb/ioctopus";
import { SYMBOLS } from "@/core/di/di.type";

import { UserRepository } from "@/core/infra/repositories/user/user.repo";
import { UserRepositoryMock } from "@/core/infra/repositories/user/user.repo.mock";

export function createUserModule () {
    const userModule = createModule()

    if (process.env.NODE_ENV === 'test') {
        userModule
            .bind(SYMBOLS.IUserRepository)
            .toClass(UserRepositoryMock)
    } else {
        userModule
            .bind(SYMBOLS.IUserRepository)
            .toClass(UserRepository)
    }

    return userModule
 }