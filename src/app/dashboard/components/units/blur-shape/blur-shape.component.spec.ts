import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurShapeComponent } from './blur-shape.component';

describe('BlurShapeComponent', () => {
  let component: BlurShapeComponent;
  let fixture: ComponentFixture<BlurShapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlurShapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
