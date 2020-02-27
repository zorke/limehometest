import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppConstants } from '../constants/app.constants';

@Injectable()
export class PropertiesService {
    constructor(private http: HttpClient) {}
    get(latitude: number, longitude: number, type: string) {
        return this.http.get<any>(`https://places.sit.ls.hereapi.com/places/v1/autosuggest?at=${latitude},${longitude}&q=${type}&apiKey=${AppConstants.HERE_API_KEY}`);
    }
}
