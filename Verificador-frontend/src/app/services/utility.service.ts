import {Injectable} from '@angular/core';
import { HttpHeaders } from '@angular/common/http'; 
import {HttpClient, HttpParams} from '@angular/common/http';



@Injectable()
export class UtilityService {
    public urlBase = "http://localhost:8008/";

    constructor(protected http: HttpClient) {}

    public verify(json_obj: string) {
        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json'
        }); 
        let options = {
            headers: httpHeaders
        };
        
        
        return this.http.post(this.urlBase+"verify/", json_obj, options);
    }

}
