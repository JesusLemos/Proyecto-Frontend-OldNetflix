import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrogeneroComponent } from './filtrogenero.component';

describe('FiltrogeneroComponent', () => {
  let component: FiltrogeneroComponent;
  let fixture: ComponentFixture<FiltrogeneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrogeneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrogeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
