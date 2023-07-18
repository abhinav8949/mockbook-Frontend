import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent {

  catId:any
  catTitle:any

  quizzes=[{
    id:'',
    title:'',
    active:true,
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    category:{
      id:'',
      title:'',
      description:''
    }
  }
]

  constructor(private _quiz:QuizService, private _route:ActivatedRoute, private toaster:NgToastService){}

  ngOnInit(){
    this.catId=this._route.snapshot.params['catId']
    this.catTitle=this._route.snapshot.params['catTitle']

    this.viewQuizOfCategory()
    
  }


  viewQuizOfCategory(){
    this._quiz.getAllQuizOfSameCategory(this.catId).subscribe((data:any)=>{
      this.quizzes=data
      console.log(this.quizzes);      
    }, (err)=>{
      this.toaster.error ({detail:"Error", summary:"Quiz Not loadad...!", duration:5000})      
    })
  }

  deleteQuiz(id:any){
    Swal.fire({
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Are you sure...want to delete this QUIZ?',
    }).then((result)=>{
      if(result.isConfirmed){
        this._quiz.deleteQuiz(id).subscribe(
          (data)=>{
            Swal.fire("Quiz Deleted",'Oops this quiz wont recover.','success')
            this.toaster.success ({detail:"Success", summary:"Quiz Deleted Successfully", duration:5000}) 
            this.viewQuizOfCategory()
          },
          (err)=>{
            Swal.fire("Error", "Server Error", 'error')
            this.toaster.error ({detail:"Error", summary:"Quiz Not Deleted", duration:5000}) 
          })
      }
    })
  }

}
