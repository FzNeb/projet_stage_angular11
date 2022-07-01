import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServAnalEditComponent } from './serv-anal-edit.component';

describe('ServAnalEditComponent', () => {
  let component: ServAnalEditComponent;
  let fixture: ComponentFixture<ServAnalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServAnalEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServAnalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
