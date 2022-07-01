import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAnalytiqueComponent } from './service-analytique.component';

describe('ServiceAnalytiqueComponent', () => {
  let component: ServiceAnalytiqueComponent;
  let fixture: ComponentFixture<ServiceAnalytiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceAnalytiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAnalytiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
