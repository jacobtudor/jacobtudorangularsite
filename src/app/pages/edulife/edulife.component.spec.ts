import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdulifeComponent } from './edulife.component';

describe('EdulifeComponent', () => {
  let component: EdulifeComponent;
  let fixture: ComponentFixture<EdulifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdulifeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdulifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
