import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {

  categories = [{
    id: '',
    title: '',
    description: ''
  }
  ]

  addQuizData = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: '',
    category: {
      id: '',
      title:''
    }
  }

  constructor(private _quiz: QuizService, private _category: CategoryService, private toaster:NgToastService) { }

  ngOnInit(): void {
    this._category.getAllExamCategory().subscribe((data: any) => {
      this.categories = data
    })
  }

  addQuiz() {
    this._quiz.addNewQuiz(this.addQuizData)
      .subscribe((data: any) => {
        this.addQuizData.title = ''
        this.addQuizData.description = ''
        this.addQuizData.maxMarks = ''
        this.addQuizData.numberOfQuestions = ''
        this.addQuizData.active = ''
        this.addQuizData.category.id = ''
        this.toaster.success ({detail:"Sucess", summary:"Quiz Added Successfully", duration:5000}) 

      }, (error) => {
        Swal.fire("Problem in Add_Quiz", "Server Error", 'error')      
        this.toaster.error ({detail:"Oops...", summary:"Server Error", duration:5000}) 
      })


  }
}
