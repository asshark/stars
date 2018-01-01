import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsModComponent } from './stars-mod.component';

describe('StarsModComponent', () => {
  let component: StarsModComponent;
  let fixture: ComponentFixture<StarsModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
