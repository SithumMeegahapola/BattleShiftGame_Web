import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarShipComponent } from './war-ship.component';

describe('WarShipComponent', () => {
  let component: WarShipComponent;
  let fixture: ComponentFixture<WarShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarShipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
