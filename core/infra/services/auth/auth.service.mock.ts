import { IAuthService } from "@/core/application/interfaces/service/auth-service.interface";
import { AuthenticationError } from "@/core/domain/errors/auth.error";
import { randomUUID } from "crypto";

type FakeSession = {
    email: string,
    id: string,
    token?: string,
    password: string,
}

export class AuthServiceMock implements IAuthService {
    private _sessions: FakeSession[]  = [];

    async createSession(email: string, password: string) {
        const sess = this._sessions.find(creds => creds.email === email && creds.password === password);
        if (!sess?.id) throw new AuthenticationError('creds-nok');
        const token = randomUUID()

        this._sessions = this._sessions.map((s) => s.id === sess.id ? {...s, token: token} : s)
        return {
            token: sess.token!,
            id: sess.id
        };
    }

    async createCredential(email: string, password: string) {
        const data = {
            email,
            password,
            id: randomUUID(),
        }
        this._sessions.push(data);
        return { id: data.id }
    }

    async invalidateSession(token: string) {
        this._sessions = this._sessions.map((s) => s.token === token ? {...s, token: undefined} : s);
        return true
    }

    async getSession(token: string) {
        const sess = this._sessions.find(creds => creds.token === token);
        if (!sess?.id) throw new AuthenticationError('creds-nok');

        return {
            token: sess.token!,
            id: sess.id
        };
    }
    async disableCredential(email: string) {
        return true
    }
}