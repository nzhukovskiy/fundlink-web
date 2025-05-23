import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStatsComponent } from './main-stats.component';

describe('MainStatsComponent', () => {
  let component: MainStatsComponent;
  let fixture: ComponentFixture<MainStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainStatsComponent]
    });
    fixture = TestBed.createComponent(MainStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
