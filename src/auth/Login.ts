import {HttpFetchAPI} from "../HttpFetchAPI";

export class Login {
    constructor(private http: HttpFetchAPI) {
    }

    async login(nickname: string, password: string): Promise<boolean> {
        const res = await this.http.post("auth/login", {
            nickname: nickname,
            password: password
        })

        if(res.httpStatus != 200) {
            return false;
        }

        this.http.setToken(res.body.token)

        return new Promise<boolean>(resolve => resolve(true))
    }
}
