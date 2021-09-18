import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadosComponent } from './prestados.component';

describe('PrestadosComponent', () => {
  let component: PrestadosComponent;
  let fixture: ComponentFixture<PrestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
