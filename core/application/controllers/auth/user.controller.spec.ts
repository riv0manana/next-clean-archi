import { describe, expect, it } from "vitest";

import { BadParamsException } from "@/core/domain/errors/common.error";
import { getInjection } from "@/core/di/container";


const userController = getInjection('UserController');

describe('Controler: Signup user', () => {
    it('should throw error on invalid input', async () => {
        await expect(userController.signUp({} as any)).rejects.toBeInstanceOf(BadParamsException)
    })

    it('should add & return user data', async () => {
        const userPromise = userController.signUp({
            name: 'test',
            phone: '1234567890',
            email: 'fds@fjdsl.com'
        })
        await expect(userPromise)
            .resolves.toHaveProperty('id')
    })

})