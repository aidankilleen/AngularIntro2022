import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendableSelectComponent } from './extendable-select.component';

describe('ExtendableSelectComponent', () => {
  let component: ExtendableSelectComponent;
  let fixture: ComponentFixture<ExtendableSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendableSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendableSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
