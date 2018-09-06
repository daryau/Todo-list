import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistappComponent } from './todolistapp.component';

describe('TodolistappComponent', () => {
  let component: TodolistappComponent;
  let fixture: ComponentFixture<TodolistappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
