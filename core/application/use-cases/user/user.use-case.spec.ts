import { it, describe, expect } from 'vitest';

import type { UserCreate } from '@/core/domain/models/user.model';

import { getInjection } from '@/core/di/container';

const userUseCase = getInjection('UserUseCase');

describe('Sign new user use case', () => {
    const userdata: UserCreate = {
        name: 'John Doe',
        email: 'j.doe@mail.com',
        phone: '074849393847',
    }
    it("should return id of created user", async () => {
        const cred = await userUseCase.signUpUser(userdata);
        expect(cred).toHaveProperty('id')
    })
})