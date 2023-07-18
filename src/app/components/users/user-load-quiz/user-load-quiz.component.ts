import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-user-load-quiz',
  templateUrl: './user-load-quiz.component.html',
  styleUrls: ['./user-load-quiz.component.css']
})
export class UserLoadQuizComponent {

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

  constructor(private _quiz:QuizService, private _route:ActivatedRoute, private router:Router, private toaster:NgToastService){
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit():void{
    // this._route.params.subscribe((para)=>{
    //   console.log(para);
    //   this.catId=para['catId']
    // })
    this.catId=this._route.snapshot.params['catId']
    this.catTitle=this._route.snapshot.params['catTitle']
    console.log("Welcome");
    
    this.loadQuizOfCategory(this.catId)
  }

  loadQuizOfCategory(id:any){
    if(this.catId==0){
      this._quiz.getAllActiveQuiz().subscribe((data:any)=>{
        this.quizzes=data
        console.log(this.quizzes); 
      },(err)=>{
        this.toaster.error ({detail:"Server-Error", summary:"Quiz not loaded", duration:5000}) 
      })
    }else{
      this._quiz.getAllActiveQuizofSameCategory(this.catId).subscribe((data:any)=>{
        this.quizzes=data
        console.log(this.quizzes); 
        this.ngOnInit       
      }, (err)=>{
        this.toaster.error ({detail:"Server-Error", summary:"Quiz not loaded", duration:5000}) 
        console.log(err);
                
      })
    }
  }




}
