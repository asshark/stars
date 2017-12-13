import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarTaggingComponent } from './star-tagging.component';

describe('StarTaggingComponent', () => {
  let component: StarTaggingComponent;
  let fixture: ComponentFixture<StarTaggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarTaggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarTaggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
