import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureBaseComponent } from './structure-base.component';

describe('StructureBaseComponent', () => {
  let component: StructureBaseComponent;
  let fixture: ComponentFixture<StructureBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
