import { IUserRepository } from "@/core/application/interfaces/repository/user-repo.interface";
import { UserCreate, UserModel, UserUpdate } from "@/core/domain/models/user.model";
import { randomUUID } from "crypto";

export class UserRepositoryMock implements IUserRepository {
    private _users: UserModel[] = [];

    async get(id: string) {
        return this._users.find(user => user.id === id)!;
    }
    async getMany(queries: string[]): Promise<UserModel[]> {
        return this._users;
    }
    async save(payload: UserCreate): Promise<UserModel> {
        const insert: UserModel = {...payload, id: randomUUID()}; 
        this._users.push({...payload, id: randomUUID()});
        return insert;
    }
    async saveMany(payloads: UserCreate[]): Promise<boolean> {
        const inserts: UserModel[] = payloads.map(payload => ({...payload, id: randomUUID()}));
        this._users.push(...inserts);
        return true;
    }
    async update(payload: Partial<UserUpdate>): Promise<UserModel> {
        const user = this._users.find(user => user.id === payload.id)!;
        this._users = this._users.map(user => user.id === payload.id ? {...user, ...payload} : user);
        return { ...user, ...payload };
    }
    async remove(id: string): Promise<boolean> {
        this._users = this._users.filter(user => user.id !== id);
        return true
    }
    async removeMany(ids: string[]): Promise<boolean> {
        this._users = this._users.filter(user => !ids.includes(user.id));
        return true;
    }
}