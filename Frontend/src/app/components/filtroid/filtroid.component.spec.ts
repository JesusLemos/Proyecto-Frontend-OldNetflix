import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroidComponent } from './filtroid.component';

describe('FiltroidComponent', () => {
  let component: FiltroidComponent;
  let fixture: ComponentFixture<FiltroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
