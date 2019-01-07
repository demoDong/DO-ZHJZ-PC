import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface ResponseType { message: string; result: any[]; status: string; }

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class HttpApi {
    private url = 'https://no_base_URL_configured';

    constructor(public http: HttpClient) {
    }

    public setURL(url: string) {
        this.url = url;
    }

    getUrl<T>(url) {
        return this.http.get<T>(url);
    }

    syncGet<T>(endpointArr: Array<string>) {
        const callbackArr = endpointArr.map(endpoint => {
            this.url = endpoint.indexOf('.json') !== -1 ? environment.mockurl : environment.apiurl;
            const promise = new Promise((resolve, reject) => {
                this.http.get<T>(this.url + endpoint).subscribe(
                    data => {
                        resolve(data);
                    },
                    error => console.log(error)
                );
            });
            return promise;
        });
        return Promise.all(callbackArr);
    }

    get<T>(endpoint: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }) {
        this.url = endpoint.indexOf('.json') !== -1 ? environment.mockurl : environment.apiurl;
        return this.http.get<T>(this.url + endpoint, options);
    }

    post(endpoint: string, body: any, options?: any) {
        this.url = endpoint.indexOf('.json') !== -1 ? environment.mockurl : environment.apiurl;
        return this.http.post(this.url + endpoint, body, options);
    }

    put(endpoint: string, body: any, options?: any) {
        this.url = endpoint.indexOf('.json') !== -1 ? environment.mockurl : environment.apiurl;
        return this.http.put(this.url + endpoint, body, options);
    }

    delete(endpoint: string, options?: any) {
        this.url = endpoint.indexOf('.json') !== -1 ? environment.mockurl : environment.apiurl;
        return this.http.delete(this.url + endpoint, options);
    }

    patch(endpoint: string, body: any, options?: any) {
        this.url = endpoint.indexOf('.json') !== -1 ? environment.mockurl : environment.apiurl;
        return this.http.put(this.url + endpoint, body, options);
    }
}
