import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoadQuizComponent } from './user-load-quiz.component';

describe('UserLoadQuizComponent', () => {
  let component: UserLoadQuizComponent;
  let fixture: ComponentFixture<UserLoadQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLoadQuizComponent]
    });
    fixture = TestBed.createComponent(UserLoadQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
