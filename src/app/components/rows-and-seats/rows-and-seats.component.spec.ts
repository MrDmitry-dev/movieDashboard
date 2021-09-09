import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsAndSeatsComponent } from './rows-and-seats.component';

describe('RowsAndSeatsComponent', () => {
  let component: RowsAndSeatsComponent;
  let fixture: ComponentFixture<RowsAndSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowsAndSeatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowsAndSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
