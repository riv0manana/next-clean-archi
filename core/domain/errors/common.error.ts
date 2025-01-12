export class BadParamsException extends Error {
    constructor(message: string, options?: ErrorOptions) {
        super(message, options);
    }
}