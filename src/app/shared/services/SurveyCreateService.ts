import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Survey } from "../models/survey-model";


@Injectable({
    providedIn: 'root'
})

export class SurveyService {
    constructor(private http: HttpClient) {
        
    }

    createSurvey(survey: Survey): Observable<Survey>{
        return this.http.post<Survey>('/api/surveys', survey)
    }
}