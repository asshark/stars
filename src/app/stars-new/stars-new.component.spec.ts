import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsNewComponent } from './stars-new.component';

describe('StarsNewComponent', () => {
  let component: StarsNewComponent;
  let fixture: ComponentFixture<StarsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
