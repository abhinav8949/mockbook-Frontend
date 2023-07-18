import { Component } from '@angular/core';

@Component({
  selector: 'app-update-questions',
  templateUrl: './update-questions.component.html',
  styleUrls: ['./update-questions.component.css']
})
export class UpdateQuestionsComponent {
  
  qId:any
  qTitle:any

  updateQuestionData={
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    quiz:{
       qId:''
      },
  }


  updateQuestion(){
    console.log(this.updateQuestionData);
  }
}
