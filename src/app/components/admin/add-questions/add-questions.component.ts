import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent {
  
  quizId:any
  quizTitle:any

  addQuestionData={
    content:'',
    image:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    quiz:{
       id:''
      }
  }

  constructor(private _question:QuestionService, private _route:ActivatedRoute, private toaster:NgToastService){}

  ngOnInit():void{
    this.quizId=this._route.snapshot.params['quizId']
    this.quizTitle=this._route.snapshot.params['quizTitle']
    this.addQuestionData.quiz.id=this.quizId
  }

  addQuestions(){
    this._question.addNewQuestion(this.addQuestionData).subscribe((data)=>{
      this.addQuestionData.content=''
      this.addQuestionData.image=''
      this.addQuestionData.option1=''
      this.addQuestionData.option2=''
      this.addQuestionData.option3=''
      this.addQuestionData.option4=''
      this.addQuestionData.answer=''
      this.toaster.success ({detail:"Sucess", summary:"Question Added Successfully", duration:5000}) 
    },(err)=>{
      Swal.fire("Problem in Add_Questions", "Server Error", 'error')      
      this.toaster.error ({detail:"Oops...", summary:"Server Error", duration:5000}) 
    }) 
  }

}
