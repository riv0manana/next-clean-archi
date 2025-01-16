'use server'

import { getInjection } from "@/core/di/container"
import { UserCreate } from "@/core/domain/models/user.model"
import { handleActionError, mapActionResponse } from "../lib/utils";

const userController = getInjection('UserController');

export const doSignUp = async (payload: UserCreate) => {
    try {
        const newuser = await userController.signUp(payload);
        return mapActionResponse(newuser)
    } catch (error) {
        return handleActionError(error as Error);
    }
}