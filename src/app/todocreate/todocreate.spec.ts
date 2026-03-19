import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todocreate } from './todocreate';

describe('Todocreate', () => {
  let component: Todocreate;
  let fixture: ComponentFixture<Todocreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todocreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todocreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
