import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Answer } from "../models/answer-model";


@Injectable({
    providedIn: 'root'
})

export class SurveyAnswerService {
    constructor(private http: HttpClient) {    
    }

     getAsnwer(): Observable<Answer[]> {
        return this.http.get<Answer[]>('/api/answers')
    }

    saveAsnwer(answer: Answer): Observable<Answer>{
        return this.http.post<Answer>('/api/answers', answer)
    }
}