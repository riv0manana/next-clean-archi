import { z } from 'zod'

export const UserSchema = z.object({
    id: z.string(),
    name: z.string().min(1, 'user.model.name.length'),
    phone: z.string().min(10, 'user.model.phone.length'),
    email: z.string().email('user.model.email.invalid'),
});


export const UserCreateSchema = UserSchema.omit({ id: true });
export const UserUpdateSchema = UserSchema.omit({ email: true, name: true });

export type UserModel = z.infer<typeof UserSchema>;
export type UserCreate = z.infer<typeof UserCreateSchema>;
export type UserUpdate = z.infer<typeof UserUpdateSchema>;