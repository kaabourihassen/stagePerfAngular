import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielsDashboardComponent } from './materiels-dashboard.component';

describe('MaterielsDashboardComponent', () => {
  let component: MaterielsDashboardComponent;
  let fixture: ComponentFixture<MaterielsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterielsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
