'use client'

import { UserCreate, UserCreateSchema, UserModel, UserUpdate, UserUpdateSchema } from "@/core/domain/models/user.model"

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver  } from '@hookform/resolvers/zod';
import Input from "@/app/components/atoms/Input/Input";
import { Button } from "@/app/components/ui/button";
import useActionToast from "@/app/hooks/use-action-toast";
import { Form } from "@/app/components/ui/form";
import { cn } from "@/app/lib/utils";

export type UserFormProps = {
    user?: UserModel;
    className?: string;
    callback?(response?: UserModel): void;
    submit(payload: UserCreate | UserUpdate): Promise<ActionResponse<UserModel>>;
}

const UserForm = ({
    className,
    callback,
    user,
    submit
}: UserFormProps) => {
    const [pending, run] = useTransition();
    const toast = useActionToast();

    const schema = user ? UserUpdateSchema : UserCreateSchema;

    const form = useForm<UserCreate | UserUpdate>({
        resolver: zodResolver(schema),
        mode: 'onBlur',
        defaultValues: {
            name: user?.name || '',
            email: user?.email || '',
            phone: user?.phone || '',
        }
    })

    const handleSubmission = (data: UserCreate | UserUpdate) => {
        run(async () => {
            const [err, res] = await submit?.(data);
            toast<UserModel>(
                [err, res],
                {
                    title: 'SUCCESS',
                    errorTitle: 'ERROR',
                    errorDescription: 'Submit error'
                },
                () => callback?.(res)
            );
        })
    }

    const { isDirty, errors } = form.formState;

    const noChange = !isDirty
    const formHasError = !!Object.keys(errors).length;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmission)} className={cn("space-y-4", className)}>
                <Input
                    control={form.control}
                    name="email"
                    type="email"
                />
                <Input
                    control={form.control}
                    name="name"
                />
                <Input
                    control={form.control}
                    name="phone"
                    type="tel"
                />
                <Button disabled={pending || formHasError || noChange} type="submit" className="w-full">
                    Submit
                </Button>
            </form>
        </Form>
    )
}

export default UserForm