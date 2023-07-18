import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../data-type/helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }


  public getAllQuiz() {
    return this.http.get(`${baseUrl}/quiz/`)
  }

  public getQuizById(id:any) {
    return this.http.get(`${baseUrl}/quiz/${id}`)
  }

  public addNewQuiz(data:any) {
    return this.http.post(`${baseUrl}/quiz/`, data)
  }

  public updateOldQuiz(data:any) {
    return this.http.put(`${baseUrl}/quiz/`, data)
  }

  public deleteQuiz(id:any) {
    return this.http.delete(`${baseUrl}/quiz/${id}`)
  }

  public getAllQuizOfSameCategory(catId:any) {
    return this.http.get(`${baseUrl}/quiz/category/${catId}`)
  }

  public getAllActiveQuiz() {
    return this.http.get(`${baseUrl}/quiz/active`)
  }

  public getAllActiveQuizofSameCategory(catId:any) {
    return this.http.get(`${baseUrl}/quiz/category/active/${catId}`)
  }


}
