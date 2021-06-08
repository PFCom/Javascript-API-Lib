import {HttpFetchAPI} from "../HttpFetchAPI";

export class Test {
    constructor(private http: HttpFetchAPI) {
    }

    async test(): Promise<boolean> {
        const res = await this.http.get("auth/test")

        if(res.httpStatus != 200) {
            return false;
        }

        return new Promise<boolean>(resolve => resolve(res.body))
    }
}
