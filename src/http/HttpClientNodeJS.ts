import {HttpClient} from "./HttpClient";
import * as https from "https";

const fetchFun = require("node-fetch")

export class HttpClientNodeJS extends HttpClient {
    protected getHttpSettings(override: any, headersOverride: any) {
        return {
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: this.injectHeaders(headersOverride),
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            agent: new https.Agent({
                rejectUnauthorized: false
            }),
            ...override
        }
    }

    protected async httpFetch(url: string, options: any): Promise<Response> {
        return await fetchFun(url, options)
    }
}
