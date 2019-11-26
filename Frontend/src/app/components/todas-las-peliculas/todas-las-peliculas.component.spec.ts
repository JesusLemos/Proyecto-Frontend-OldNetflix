import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasLasPeliculasComponent } from './todas-las-peliculas.component';

describe('TodasLasPeliculasComponent', () => {
  let component: TodasLasPeliculasComponent;
  let fixture: ComponentFixture<TodasLasPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodasLasPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodasLasPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
