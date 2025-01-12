import { IUserRepository } from "@/core/application/interfaces/repository/user-repo.interface";
import { UserCreate, UserModel, UserUpdate } from "@/core/domain/models/user.model";

export class UserRepository implements IUserRepository {
    async get(id: string): Promise<UserModel> {
        return {} as UserModel
    }

    async getMany(queries: string[]): Promise<UserModel[]> {
        return [] as UserModel[];
    }

    async save(payload: UserCreate): Promise<UserModel> {
        return {} as UserModel;
    }

    async saveMany(payloads: UserCreate[]): Promise<boolean> {
        return true;
    }

    async update(payload: Partial<UserUpdate>): Promise<UserModel> {
        return {} as UserModel;
    }

    async updateMany(payloads: UserUpdate): Promise<boolean> {
        return true;
    }

    async remove(id: string): Promise<boolean> {
        return true
    }

    async removeMany(ids: string[]): Promise<boolean> {
        return true;
    }
}