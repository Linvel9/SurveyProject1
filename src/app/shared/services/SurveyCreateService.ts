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

     getSurvey(): Observable<Survey[]> {
        return this.http.get<Survey[]>('/api/surveys')
    }

    createSurvey(survey: Survey): Observable<Survey>{
        return this.http.post<Survey>('/api/surveys', survey)
    }
    
    deleteSurvey(survey: Survey){
        return this.http.delete(`/api/surveys/${survey.Survey}`)
    }
}