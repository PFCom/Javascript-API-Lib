export class HttpClient {
    constructor(apiUrl: string) {
        this.apiUrl = apiUrl
    }

    public token: string = ""

    public apiUrl: string

    protected injectHeaders(headersOverride: any) {
        if(this.token != "") {
            return {
                'Content-Type': 'application/json',
                'token': this.token,
                ...headersOverride
            }
        }

        return {
            'Content-Type': 'application/json',
            ...headersOverride
        }
    }

    public async get(url: string): Promise<HttpResponse> {
        url = this.apiUrl + url
        const res = await this.httpFetch(url, this.getHttpSettings({
            method: 'GET'
        }, {}))

        const result = new HttpResponse()
        result.httpStatus = res.status
        result.body = await res.json()

        return new Promise<HttpResponse>((resolve => resolve(result)))
    }

    public async post(url: string, data: any): Promise<HttpResponse> {
        url = this.apiUrl + url
        const res = await this.httpFetch(url, this.getHttpSettings({
            method: 'POST',
            body: JSON.stringify(data)
        }, {}))

        const result = new HttpResponse()
        result.httpStatus = res.status
        if(res.status != 200) {
            result.body = await res.text()
        }
        else
        {
            result.body = await res.json()
        }

        return new Promise<HttpResponse>((resolve => resolve(result)))
    }

    public async put(url: string, data: any): Promise<number> {
        url = this.apiUrl + url
        const res = await this.httpFetch(url, this.getHttpSettings({
            method: 'PUT',
            body: JSON.stringify(data)
        }, {}))

        return new Promise<number>((resolve => resolve(res.status)))
    }

    public async delete(url: string, data: any): Promise<HttpResponse> {
        url = this.apiUrl + url
        const res = await this.httpFetch(url, this.getHttpSettings({
            method: 'DELETE',
            body: JSON.stringify(data)
        }, {}))

        const result = new HttpResponse()
        result.httpStatus = res.status
        result.body = await res.json()

        return new Promise<HttpResponse>((resolve => resolve(result)))
    }

    protected getHttpSettings(override: any, headersOverride: any) {
        return {
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: this.injectHeaders(headersOverride),
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            ...override
        }
    }

    protected async httpFetch(url: string, options: any): Promise<Response> {
        return await fetch(url, options)
    }
}

export class HttpResponse {
    httpStatus: number
    body: any
}
