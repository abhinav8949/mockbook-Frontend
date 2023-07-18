import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent {

  
  quizId:any
  quizTitle:any

  questions=[{
    id:'',
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
  }]

  constructor(private _question:QuestionService, private _route:ActivatedRoute, private toaster:NgToastService){}

  ngOnInit():void{
    this.quizId=this._route.snapshot.params['quizId']
    this.quizTitle=this._route.snapshot.params['quizTitle']
    this.viewAllQuestion()
  }

  viewAllQuestion(){
    this._question.getAllQuestionByQuiz(this.quizId).subscribe((data:any)=>{
      this.questions=data;
    }, (err)=>{
      this.toaster.error ({detail:"Error", summary:"Question not loading...!", duration:5000})    })
  }

  deleteQuestion(id:any){
    Swal.fire({
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Are you sure...want to delete this QUESTION?',
    }).then((result)=>{
      if(result.isConfirmed){
        this._question.deleteQuestionById(id).subscribe(
          (data)=>{
            Swal.fire("Question Deleted",'Oops...this question wont recover.','success')
            this.toaster.success ({detail:"Success", summary:"Question Deleted Successfully", duration:5000}) 
            this.viewAllQuestion()
          },
          (err)=>{
            Swal.fire("Error", "Server Error", 'error')
            this.toaster.error ({detail:"Error", summary:"Question Not Deleted", duration:5000}) 
          })
      }
    })
  }


}
