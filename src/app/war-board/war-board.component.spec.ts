import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarBoardComponent } from './war-board.component';

describe('WarBoardComponent', () => {
  let component: WarBoardComponent;
  let fixture: ComponentFixture<WarBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
