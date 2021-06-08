export class RegisterResponse {
    public readonly id: string

    constructor(res: any) {
        this.id = res.id
    }
}
