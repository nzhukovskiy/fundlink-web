import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDialogComponent } from './text-dialog.component';

describe('TextDialogComponent', () => {
  let component: TextDialogComponent;
  let fixture: ComponentFixture<TextDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextDialogComponent]
    });
    fixture = TestBed.createComponent(TextDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
