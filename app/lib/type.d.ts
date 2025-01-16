declare type ActionStatus = {
    message: string;
    code?: number;
}

declare type ActionResponse<T> = [error?: ActionStatus | Error, data?: T];