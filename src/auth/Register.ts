import {HttpFetchAPI} from "../HttpFetchAPI";
import {RegisterResponse} from "./Responses/RegisterResponse";
import {FailedToRegisterException} from "./Exceptions/FailedToRegisterException";

export class Register {
    constructor(private http: HttpFetchAPI) {
    }

    async reg(nickname: string, password: string): Promise<RegisterResponse> {
        const res = await this.http.post("auth/register", {
            nickname: nickname,
            password: password
        })

        if(res.httpStatus != 200) {
            throw new FailedToRegisterException(res.body, res.httpStatus)
        }

        return new Promise<RegisterResponse>(resolve => resolve(new RegisterResponse(res.body)))
    }
}
