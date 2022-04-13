import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RikishiComponent } from './rikishi.component';

describe('RikishiComponent', () => {
  let component: RikishiComponent;
  let fixture: ComponentFixture<RikishiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RikishiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RikishiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
