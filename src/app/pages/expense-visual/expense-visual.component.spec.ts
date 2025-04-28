import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseVisualComponent } from './expense-visual.component';

describe('ExpenseVisualComponent', () => {
  let component: ExpenseVisualComponent;
  let fixture: ComponentFixture<ExpenseVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseVisualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
