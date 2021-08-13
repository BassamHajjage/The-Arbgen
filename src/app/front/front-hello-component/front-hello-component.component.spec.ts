import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontHelloComponentComponent } from './front-hello-component.component';

describe('FrontHelloComponentComponent', () => {
  let component: FrontHelloComponentComponent;
  let fixture: ComponentFixture<FrontHelloComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontHelloComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontHelloComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
