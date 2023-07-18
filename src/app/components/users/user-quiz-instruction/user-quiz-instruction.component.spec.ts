import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuizInstructionComponent } from './user-quiz-instruction.component';

describe('UserQuizInstructionComponent', () => {
  let component: UserQuizInstructionComponent;
  let fixture: ComponentFixture<UserQuizInstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserQuizInstructionComponent]
    });
    fixture = TestBed.createComponent(UserQuizInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
