import { UserModel, UserUpdate } from "@/core/domain/models/user.model";

export interface IUserRepository {
    get(id: string): Promise<UserModel>;
    getMany(queries: string[]): Promise<UserModel[]>;
    save(payload: UserModel): Promise<UserModel>;
    saveMany(payloads: UserModel[]): Promise<boolean>;
    update(payload: Partial<UserUpdate>): Promise<UserModel>;
    remove(id: string): Promise<boolean>;
    removeMany(ids: string[]): Promise<boolean>;
}