import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupFoundationComponent } from './setup-foundation.component';

describe('SetupFoundationComponent', () => {
  let component: SetupFoundationComponent;
  let fixture: ComponentFixture<SetupFoundationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupFoundationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
