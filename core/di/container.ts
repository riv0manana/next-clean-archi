import { createContainer } from "@evyweb/ioctopus";
import { DI_TYPES, SYMBOLS } from "@/core/di/di.type";

import { createAuthModule } from "@/core/di/modules/auth.module";
import { createUserModule } from "@/core/di/modules/user.module";

const AppContainer = createContainer();


AppContainer.load(Symbol.for('AuthModule'), createAuthModule());
AppContainer.load(Symbol.for('UserModule'), createUserModule())

export function getInjection<K extends keyof typeof SYMBOLS>(
    symbol: K
): DI_TYPES[K] {
    return AppContainer.get(SYMBOLS[symbol])
}