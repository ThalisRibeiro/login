import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaContaComponent } from './cria-conta.component';

describe('CriaContaComponent', () => {
  let component: CriaContaComponent;
  let fixture: ComponentFixture<CriaContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
