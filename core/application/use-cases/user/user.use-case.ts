import { IUserRepository } from "@/core/application/interfaces/repository/user-repo.interface";
import { IAuthService } from "@/core/application/interfaces/service/auth-service.interface";
import { AuthenticationError } from "@/core/domain/errors/auth.error";
import { UserCreate } from "@/core/domain/models/user.model";
import { randomUUID } from "crypto";

export class UserUseCase {
    private _userRepo: IUserRepository;
    private _authService: IAuthService;

    constructor(userRepo: IUserRepository, authService: IAuthService) {
        this._userRepo = userRepo;
        this._authService = authService;
    }

    async signUpUser(payload: UserCreate) {
        const new_credential = await this._authService.createCredential(
            payload.email,
            randomUUID()
        )
        if (!new_credential) throw new AuthenticationError('auth.create.error')

        const newuser = await this._userRepo.save({ ...payload, id: new_credential.id });
        
        return newuser;
    }
}