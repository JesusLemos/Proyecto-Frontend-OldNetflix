import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilarpeliculasComponent } from './alquilarpeliculas.component';

describe('AlquilarpeliculasComponent', () => {
  let component: AlquilarpeliculasComponent;
  let fixture: ComponentFixture<AlquilarpeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquilarpeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilarpeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
