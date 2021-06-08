import {Register} from "./auth/Register"
import {HttpFetchAPI} from "./HttpFetchAPI"
import {Login} from "./auth/Login";
import {Test} from './auth/Test';
import {SetToken} from "./auth/SetToken";

export class PFComContainer {
    private readonly httpClient: HttpFetchAPI

    public reg: Register
    public login: Login
    public test: Test
    public setToken: SetToken

    constructor(apiUrl: string, nodeJs: boolean) {
        this.httpClient = new HttpFetchAPI(apiUrl, nodeJs)

        this.reg = new Register(this.httpClient)
        this.login = new Login(this.httpClient)
        this.test = new Test(this.httpClient)
        this.setToken = new SetToken(this.httpClient, this.test)
    }
}