import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnaHelixComponent } from './dna-helix.component';

describe('DnaHelixComponent', () => {
  let component: DnaHelixComponent;
  let fixture: ComponentFixture<DnaHelixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DnaHelixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnaHelixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
