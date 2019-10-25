import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test3DemoComponent } from './test3-demo.component';

describe('Test3DemoComponent', () => {
  let component: Test3DemoComponent;
  let fixture: ComponentFixture<Test3DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test3DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test3DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
