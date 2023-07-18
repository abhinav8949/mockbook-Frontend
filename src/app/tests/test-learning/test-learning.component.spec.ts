import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLearningComponent } from './test-learning.component';

describe('TestLearningComponent', () => {
  let component: TestLearningComponent;
  let fixture: ComponentFixture<TestLearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestLearningComponent]
    });
    fixture = TestBed.createComponent(TestLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
