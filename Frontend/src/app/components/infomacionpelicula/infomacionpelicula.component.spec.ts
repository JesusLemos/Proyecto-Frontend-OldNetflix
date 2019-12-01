import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomacionpeliculaComponent } from './infomacionpelicula.component';

describe('InfomacionpeliculaComponent', () => {
  let component: InfomacionpeliculaComponent;
  let fixture: ComponentFixture<InfomacionpeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfomacionpeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomacionpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
