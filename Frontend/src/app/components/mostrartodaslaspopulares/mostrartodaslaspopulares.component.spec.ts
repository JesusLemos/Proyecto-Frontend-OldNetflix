import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrartodaslaspopularesComponent } from './mostrartodaslaspopulares.component';

describe('MostrartodaslaspopularesComponent', () => {
  let component: MostrartodaslaspopularesComponent;
  let fixture: ComponentFixture<MostrartodaslaspopularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrartodaslaspopularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrartodaslaspopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
