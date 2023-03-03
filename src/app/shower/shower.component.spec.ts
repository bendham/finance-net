import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowerComponent } from './shower.component';

describe('ShowerComponent', () => {
  let component: ShowerComponent;
  let fixture: ComponentFixture<ShowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
