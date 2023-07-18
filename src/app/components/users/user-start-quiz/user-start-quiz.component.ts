import { LocationStrategy } from '@angular/common';
import { publishFacade } from '@angular/compiler';
import {
  Component,
  VERSION,
  ViewChild,
  OnInit,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject, fromEvent, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-start-quiz',
  templateUrl: './user-start-quiz.component.html',
  styleUrls: ['./user-start-quiz.component.css']
})
export class UserStartQuizComponent {

  quizId: any;
  quizTitle: any

  questions: any

  isSubmit = false

  // angular eval-handled
  marksObtained = 0
  correctAnswerOfUser = 0
  attemptedQuestion = 0

  // java eval-server-handled
  marksObtained2 = 0
  correctAnswerOfUser2 = 0
  attemptedQuestion2 = 0

  timer: any

  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(private _questions: QuestionService, private locationSt: LocationStrategy,
    private _route: ActivatedRoute, private router: Router, private toaster: NgToastService,
    private _nav: NavbarService, private _footer: FooterService
  ) { }

  ngOnInit(): void {
    this._nav.hide()
    this._footer.hide()
    this.quizId = this._route.snapshot.params['quizId']
    this.quizTitle = this._route.snapshot.params['quizTitle']
    this.laodQuestions()
    this.preventBack()

    interval(5000).subscribe(x => {
      this.getSnapshot()
    })
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  preventBack() {
    history.pushState(null, '');
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)
    ).subscribe((_) => {
      history.pushState(null, '');
      // this.openModal(`You can't make changes or go back at this time.`);
    });
    Object.freeze(history)
  }

  laodQuestions() {
    this._questions.getShuffledQuestionForTest(this.quizId).subscribe(
      (data) => {
        this.questions = data
        this.timer = this.questions.length * (1) * 60
        this.questions.forEach((x: any) => {
          x['givenAnswer'] = ''
        })
        this.startTimer()
      },
      (err) => {
        alert(err)
      }
    )
  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit...',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon: 'info'
    }).then((result) => {
      if (result.isConfirmed) {
        this.isSubmit = true
        // calculation-of evaluating
        this.evalQuizOnJavaServer()
      }
    })
  }

  startTimer() {
    let t: any = window.setInterval(() => {
      if (this.timer === 0) {
        clearInterval(t)
      } else if (this.timer <= 1) {
        alert('Time End, click to view result')
        // this.evalQuizOnFrontend()
        this.evalQuizOnJavaServer()
        clearInterval(t)
      }
      else {
        this.timer--
      }
    }, 1000)
  }

  getFormattedTimeInMmSs() {
    let mm = Math.floor(this.timer / 60)
    let ss = this.timer - (mm * 60)
    return `${mm} : ${ss} sec`
  }

  // evalQuizOnFrontend() {
  //   // console.log(this.questions); 
  //   this.questions.forEach((x: any) => {
  //     if (x.givenAnswer === x.answer) {
  //       this.correctAnswerOfUser++
  //       let marksSingle = this.questions[0].quiz.maxMarks / this.questions.length;
  //       this.attemptedQuestion
  //       this.marksObtained += marksSingle
  //     }
  //     if (x.givenAnswer.trim() != '') {
  //       this.attemptedQuestion++
  //     }
  //   })
  //   console.log('obtained: ' + this.marksObtained);
  //   console.log('correct answer: '+this.correctAnswerOfUser);
  //   console.log('attempted: '+this.attemptedQuestion);
  //   console.log(this.questions);
  //   this.isSubmit = true
  // }

  evalQuizOnJavaServer() {
    // Call server to evaluate
    this._questions.evaluateQuizScore(this.questions).subscribe(
      (data: any) => {
        // console.log(data);
        this.marksObtained2 = data.marksGot;
        this.correctAnswerOfUser2 = data.correctAnswer;
        this.attemptedQuestion2 = data.attemptedQuestion;
        this.isSubmit = true
        // console.log('obtained2: ' + this.marksObtained2);
        // console.log('correct answer2: ' + this.correctAnswerOfUser2);
        // console.log('attempted2: ' + this.attemptedQuestion2);
        // console.log(this.questions);
      },
      (err) => {
        alert('Server-Error in evaluation' + err)
      }
    )
  }


  printPage() {
    window.print()
  }


  private trigger: Subject<any> = new Subject();
  webcamImage!: WebcamImage
  private nextWebcam: Subject<any> = new Subject();
  sysImage = ''

  public getSnapshot(): void {
    this.trigger.next(void 0)
  }

  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage
    this.sysImage = webcamImage!.imageAsDataUrl
    // console.log('got web cam image', this.sysImage);

  }

  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }


}
