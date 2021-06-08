import {HttpClient, HttpResponse} from "./http/HttpClient";
import {HttpClientNodeJS} from "./http/HttpClientNodeJS";

export class HttpFetchAPI
{
    private internalAPI: HttpClient

    constructor(apiUrl: string, nodeJs: boolean) {
        if(!nodeJs) {
            this.internalAPI = new HttpClient(apiUrl)
        }
        else
        {
            this.internalAPI = new HttpClientNodeJS(apiUrl)
        }
    }

    public setToken(token: string) {
        this.internalAPI.token = token
    }

    public get(url: string): Promise<HttpResponse> {
        return this.internalAPI.get(url)
    }

    public post(url: string, data: any): Promise<HttpResponse> {
        return this.internalAPI.post(url, data)
    }

    public put(url: string, data: any): Promise<number> {
        return this.internalAPI.put(url, data)
    }

    public delete(url: string, data: any): Promise<HttpResponse> {
        return this.internalAPI.delete(url, data)
    }
}
