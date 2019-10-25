import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1DemoComponent } from './test1-demo.component';

describe('Test1DemoComponent', () => {
  let component: Test1DemoComponent;
  let fixture: ComponentFixture<Test1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
