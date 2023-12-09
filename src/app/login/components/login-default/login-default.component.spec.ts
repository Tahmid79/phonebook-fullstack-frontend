import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDefaultComponent } from './login-default.component';

describe('LoginDefaultComponent', () => {
  let component: LoginDefaultComponent;
  let fixture: ComponentFixture<LoginDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginDefaultComponent]
    });
    fixture = TestBed.createComponent(LoginDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
