import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../data-type/helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  
  public getAllQuestions(){
    return this.http.get(`${baseUrl}/question/`)
  }

  public getPageQuestions( ){
    return this.http.get(`${baseUrl}/question/`)
  }

  public getQuestionById(quesId:any){
    return this.http.get(`${baseUrl}/question/${quesId}`)
  }

  public addNewQuestion(data:any){
    return this.http.post(`${baseUrl}/question/`, data)
  }

  public updateOldQuestion(data:any){
    return this.http.put(`${baseUrl}/question/`, data)
  }

  public deleteQuestionById(quesId:any){
    return this.http.delete(`${baseUrl}/question/${quesId}`)
  }

  public getAllQuestionByQuiz(quizId:any){
    return this.http.get(`${baseUrl}/question/quiz/all/${quizId}`)
  }

  public getShuffledQuestionForTest(quizId:any){
    return this.http.get(`${baseUrl}/question/quiz/${quizId}`)
  }

  public evaluateQuizScore(questions:any){
    return this.http.post(`${baseUrl}/question/eval-quiz`, questions)
  }


}
