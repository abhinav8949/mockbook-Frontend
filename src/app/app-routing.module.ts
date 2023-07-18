import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TestDashboardComponent } from './tests/test-dashboard/test-dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './components/users/user-dashboard/user-dashboard.component';
import { UserWelcomeComponent } from './components/users/user-welcome/user-welcome.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { UserLoadQuizComponent } from './components/users/user-load-quiz/user-load-quiz.component';
import { UserQuizInstructionComponent } from './components/users/user-quiz-instruction/user-quiz-instruction.component';
import { UserStartQuizComponent } from './components/users/user-start-quiz/user-start-quiz.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminWelcomeComponent } from './components/admin/admin-welcome/admin-welcome.component';
import { ViewCategoriesComponent } from './components/admin/view-categories/view-categories.component';
import { ViewQuizComponent } from './components/admin/view-quiz/view-quiz.component';
import { UpdateQuestionsComponent } from './components/admin/update-questions/update-questions.component';
import { AddCategoriesComponent } from './components/admin/add-categories/add-categories.component';
import { AddQuizComponent } from './components/admin/add-quiz/add-quiz.component';
import { AddQuestionsComponent } from './components/admin/add-questions/add-questions.component';
import { ViewQuestionsComponent } from './components/admin/view-questions/view-questions.component';
import { UpdateQuizComponent } from './components/admin/update-quiz/update-quiz.component';
import { userGuard } from './guards/user.guard';
import { adminGuard } from './guards/admin.guard';
import { normalGuard } from './guards/normal.guard';
import { TestQuizComponent } from './tests/test-quiz/test-quiz.component';
import { TestLearningComponent } from './tests/test-learning/test-learning.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component:HomepageComponent, pathMatch:'full', canActivate:[normalGuard]},
  {path:'about-us', component:AboutUsComponent, pathMatch:'full', canActivate:[normalGuard]},
  {path:'login', component:LoginComponent, pathMatch:'full', canActivate:[normalGuard]},
  {path:'signup', component:SignupComponent, pathMatch:'full', canActivate:[normalGuard]},

  {path:'test-dashboard', component:TestDashboardComponent, canActivate:[normalGuard],
    children:[
      {path:'', component:TestQuizComponent},
      {path:'test-learn', component:TestLearningComponent},
    ]
  },
  
  // user routing
  {path:'user-dashboard', component:UserDashboardComponent, canActivate:[userGuard], 
  children:[
    {path:'', component:UserWelcomeComponent},
    {path:'profile', component:UserProfileComponent},
    {path:'quiz', component:TestQuizComponent},
    {path:'learn', component:TestLearningComponent},
    // {path:'user-quiz/:catTitle/:catId', component:UserLoadQuizComponent},
    {path:'instructions/:catTitle/:quizTitle/:quizId', component:UserQuizInstructionComponent}
  ]
},

{path:'start/:quizId/:quizTitle', component:UserStartQuizComponent, canActivate:[userGuard], pathMatch:'full'},

// Admin Routing
{path:'admin-dashboard', component:AdminDashboardComponent, canActivate:[adminGuard],
children:[
  {path:'', component:AdminWelcomeComponent},
  
  {path:'view-categories', component:ViewCategoriesComponent},
  {path:'add-categories', component:AddCategoriesComponent},
  
  {path:'view-quiz/:catId/:catTitle', component:ViewQuizComponent},
  {path:'add-quiz', component:AddQuizComponent},
  {path:'update-quiz/:quizId/:quizTitle', component:UpdateQuizComponent},
  
  {path:'view-questions/:quizId/:quizTitle', component:ViewQuestionsComponent},
  {path:'add-questions/:quizId/:quizTitle', component:AddQuestionsComponent},
  {path:'update-questions/:quizId/:quizTitle', component:UpdateQuestionsComponent},   
]},

{path:'**', component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
