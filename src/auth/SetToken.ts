import {HttpFetchAPI} from "../HttpFetchAPI";
import {Test} from "./Test";

export class SetToken {
    private readonly api: HttpFetchAPI

    private readonly test: Test

    constructor(api: HttpFetchAPI, test: Test) {
        this.api = api
        this.test = test
    }

    async setToken(token: string): Promise<boolean> {
        this.api.setToken(token)

        return await this.test.test()
    }
}
