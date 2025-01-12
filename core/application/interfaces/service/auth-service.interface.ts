type Session = {
    token: string;
    id: string;
}

export interface IAuthService {
    createSession(email: string, password: string): Promise<Session>;
    createCredential(email: string, password: string): Promise<{ id: string }>;
    invalidateSession(token: string): Promise<boolean>;
    getSession(token: string): Promise<Session>;
    disableCredential(email: string): Promise<boolean>;
}