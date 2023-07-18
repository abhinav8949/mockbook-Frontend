import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent {

  quizId:any
  quizTitle:any

  updateQuizData={
    title:'',
    description:'',
    max_marks:'',
    number_of_questions:'',
    active:'',
    category_id:{
      id:''
    }
  }

  constructor(private _route:ActivatedRoute, private _quiz:QuizService){}

  ngOnSubmit(){
    this.quizId=this._route.snapshot.params['quizId']
    this.quizTitle=this._route.snapshot.params['quizTitle']  
    
  }


  updateQuiz(){
    console.log(this.quizId);  
    console.log(this.updateQuizData);
  }

}
