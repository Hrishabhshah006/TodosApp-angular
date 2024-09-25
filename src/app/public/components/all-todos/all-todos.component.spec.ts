import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTodosComponent } from './all-todos.component';

describe('AllTodosComponent', () => {
  let component: AllTodosComponent;
  let fixture: ComponentFixture<AllTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllTodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
