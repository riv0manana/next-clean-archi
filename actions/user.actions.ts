'use server'

import { getInjection } from "@/core/di/container"
import { UserCreate } from "@/core/domain/models/user.model"

const userController = getInjection('UserController');

export const doSignUp = async (payload: UserCreate) => {
    try {
        const newuser = await userController.signUp(payload);
        return newuser
    } catch {
        return null;
    }
}