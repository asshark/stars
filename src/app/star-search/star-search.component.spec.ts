import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarSearchComponent } from './star-search.component';

describe('StarSearchComponent', () => {
  let component: StarSearchComponent;
  let fixture: ComponentFixture<StarSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
