import { getInjection } from "@/core/di/container";
import { UserCreate } from "@/core/domain/models/user.model";
import { NextRequest, NextResponse } from "next/server";

const userController = getInjection('UserController');

export const POST = async (req: NextRequest) => {
    try {
        const payload: UserCreate = await req.json();
        const newuser = await userController.signUp(payload);

        return NextResponse.json({
            data: newuser
        }, { status: 201 });
    } catch {
        return NextResponse.json({}, { status: 400 });
    }
}