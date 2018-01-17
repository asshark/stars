import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarDeletingComponent } from './star-deleting.component';

describe('StarDeletingComponent', () => {
  let component: StarDeletingComponent;
  let fixture: ComponentFixture<StarDeletingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarDeletingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarDeletingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
