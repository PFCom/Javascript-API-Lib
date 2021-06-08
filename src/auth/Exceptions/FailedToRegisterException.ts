export class FailedToRegisterException {
    private readonly msg: string

    private readonly httpStatus: number

    public constructor(msg: string, httpStatus: number) {
        this.msg = msg
        this.httpStatus = httpStatus
    }

    public getMessage(): string {
        return this.msg
    }

    public getHttpStatus(): number {
        return this.httpStatus
    }
}
