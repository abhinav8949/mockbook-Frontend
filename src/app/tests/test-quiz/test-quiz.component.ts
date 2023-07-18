import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { LoginService } from 'src/app/services/login.service';
import { QuizService } from 'src/app/services/quiz.service';


@Component({
  selector: 'app-test-quiz',
  templateUrl: './test-quiz.component.html',
  styleUrls: ['./test-quiz.component.css']
})
export class TestQuizComponent {

  time:any
  catId:any
  
  userLogin:any

  filterString:any

  quizzes=[{
    id:'',
    title:'',
    active:true,
    description:'',
    maxMarks:'',
    image:'',
    numberOfQuestions:0,
    category:{
      id:'',
      title:'',
      description:''
    }
  }
]

  constructor(private _quiz:QuizService, private _login:LoginService, private toaster:NgToastService){}

  ngOnInit():void{
    this.loadingAllActiveQuiz()
    this.userLogin=this._login.isLoggedIn()
  }

  loadingAllActiveQuiz(){
    this._quiz.getAllActiveQuiz().subscribe((data:any)=>{
      this.quizzes=data
    },(err)=>{
      this.toaster.error ({detail:"Server-Error", summary:"Quiz not loaded due to internal error", duration:5000})       
    })
  }

  loadingQuizByCategoryId(id:any){
    if(this.catId==0){
      this._quiz.getAllActiveQuiz().subscribe((data:any)=>{
        this.quizzes=data
        console.log(this.quizzes); 
      },(err)=>{
        this.toaster.error ({detail:"Server-Error", summary:"Quiz not loaded due to internal error", duration:5000}) 
      })
    }else{
      this._quiz.getAllActiveQuizofSameCategory(this.catId).subscribe((data:any)=>{
        this.quizzes=data
        console.log(this.quizzes); 
        this.ngOnInit       
      }, (err)=>{
        this.toaster.error ({detail:"Server-Error", summary:"Quiz not loaded due to internal error", duration:5000})                 
      })
    }
  }

  searchForm(){
    console.log('searching quiz working....');
  }


}
