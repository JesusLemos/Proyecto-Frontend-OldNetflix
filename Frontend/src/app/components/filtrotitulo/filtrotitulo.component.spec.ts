import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrotituloComponent } from './filtrotitulo.component';

describe('FiltrotituloComponent', () => {
  let component: FiltrotituloComponent;
  let fixture: ComponentFixture<FiltrotituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrotituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrotituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
