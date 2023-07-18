import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-quiz-instruction',
  templateUrl: './user-quiz-instruction.component.html',
  styleUrls: ['./user-quiz-instruction.component.css']
})
export class UserQuizInstructionComponent {

  quizId:any
  catTitle:any
  quizzes:any

  constructor(private _quiz:QuizService, private router:Router, 
    private _route:ActivatedRoute, private toaster:NgToastService){}

  ngOnInit():void{
    this.quizId=this._route.snapshot.params['quizId']
    this.catTitle=this._route.snapshot.params['catTitle']
    this.getSingleQuizById()
  }

  getSingleQuizById(){
    Swal.fire({
      icon:'question',
      showCancelButton:true,
      confirmButtonText:'Read Instructions',
      title:'Read Exam Instructions Carefully',
    }).then((result)=>{
      if(result.isConfirmed){
        this._quiz.getQuizById(this.quizId).subscribe((data:any)=>{
          this.quizzes=data
          },
          (err)=>{
            Swal.fire("Server Error", "Try again...!", 'error')
          })
      }
    })
  }

  startQuiz(){
    Swal.fire({
      title:'Are you sure to start...',
      showDenyButton:true,
      confirmButtonText:'Start Exam',
      icon:'info'
    }).then((result)=>{
      if(result.isConfirmed){
        const url=this.router.serializeUrl(
          this.router.createUrlTree(['/start/'+this.quizzes.id+'/'+this.quizzes.title])
        )
        window.open(url, "newWin", "width="+screen.availWidth+",height="+screen.availHeight)       
        this.toaster.success ({detail:"Success", summary:"Exam Started", duration:5000}) 
      }else if(result.isDenied){
        this.toaster.info ({detail:"Exam Denied", summary:"Read Instruction again...", duration:5000}) 
        return
      }
    })
  }

}
