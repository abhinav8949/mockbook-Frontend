import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStartQuizComponent } from './user-start-quiz.component';

describe('UserStartQuizComponent', () => {
  let component: UserStartQuizComponent;
  let fixture: ComponentFixture<UserStartQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserStartQuizComponent]
    });
    fixture = TestBed.createComponent(UserStartQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
