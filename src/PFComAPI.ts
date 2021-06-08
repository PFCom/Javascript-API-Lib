import {PFComContainer} from "./PFComContainer";
import {RegisterResponse} from "./auth/Responses/RegisterResponse";

export class PFComAPI {
    private readonly container: PFComContainer

    public readonly auth: AuthArea

    constructor(apiUrl: string, nodeJS: boolean) {
        this.container = new PFComContainer(apiUrl, nodeJS)

        this.auth = new AuthArea(this.container)
    }
}

class AuthArea {
    constructor(private container: PFComContainer) {
    }

    register(nickname: string, password: string): Promise<RegisterResponse> {
        return this.container.reg.reg(nickname, password)
    }

    login(nickname: string, password: string): Promise<boolean> {
        return this.container.login.login(nickname, password)
    }

    test(): Promise<boolean> {
        return this.container.test.test()
    }

    setToken(token: string): Promise<boolean> {
        return this.container.setToken.setToken(token)
    }
}