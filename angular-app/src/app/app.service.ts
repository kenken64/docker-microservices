import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders   } from "@angular/common/http";
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private httpClient: HttpClient){
        // constructor .
    }

    getAllTasks(): Promise<any> {
        return this.httpClient.get(`${environment.api_url}tasks`).toPromise()
    }
}