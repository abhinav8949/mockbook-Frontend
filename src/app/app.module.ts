import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TestDashboardComponent } from './tests/test-dashboard/test-dashboard.component';
import { TestSidebarComponent } from './tests/test-sidebar/test-sidebar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './components/users/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { AdminWelcomeComponent } from './components/admin/admin-welcome/admin-welcome.component';
import { AddCategoriesComponent } from './components/admin/add-categories/add-categories.component';
import { AddQuizComponent } from './components/admin/add-quiz/add-quiz.component';
import { AddQuestionsComponent } from './components/admin/add-questions/add-questions.component';
import { UpdateQuestionsComponent } from './components/admin/update-questions/update-questions.component';
import { ViewCategoriesComponent } from './components/admin/view-categories/view-categories.component';
import { ViewQuizComponent } from './components/admin/view-quiz/view-quiz.component';
import { UserWelcomeComponent } from './components/users/user-welcome/user-welcome.component';
import { UserLoadQuizComponent } from './components/users/user-load-quiz/user-load-quiz.component';
import { UserQuizInstructionComponent } from './components/users/user-quiz-instruction/user-quiz-instruction.component';
import { UserStartQuizComponent } from './components/users/user-start-quiz/user-start-quiz.component';
import { UpdateQuizComponent } from './components/admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './components/admin/view-questions/view-questions.component';
import { HttpClientModule } from '@angular/common/http'
import { NgToastModule } from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TestQuizComponent } from './tests/test-quiz/test-quiz.component';
import { TestLearningComponent } from './tests/test-learning/test-learning.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { QuizFilterPipe } from './pipes/quiz-filter.pipe';
import { WebcamModule } from 'ngx-webcam';
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION, NgxUiLoaderHttpModule, NgxUiLoaderRouterModule
} from 'ngx-ui-loader';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.development';
import { SignupComponent } from './signup/signup.component';
import { authInterceptorProviders } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    TestDashboardComponent,
    TestSidebarComponent,
    AboutUsComponent,
    LoginComponent,
    UserDashboardComponent,
    UserProfileComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    AdminWelcomeComponent,
    AddCategoriesComponent,
    AddQuizComponent,
    AddQuestionsComponent,
    UpdateQuestionsComponent,
    ViewCategoriesComponent,
    ViewQuizComponent,
    UserWelcomeComponent,
    UserLoadQuizComponent,
    UserQuizInstructionComponent,
    UserStartQuizComponent,
    UpdateQuizComponent,
    ViewQuestionsComponent,
    TestQuizComponent,
    TestLearningComponent,
    ErrorPageComponent,
    QuizFilterPipe,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    WebcamModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule.forRoot({
      showForeground: false
    }),
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
      minTime: 300
    }),
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
