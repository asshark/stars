import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarReportComponent } from './star-report.component';

describe('StarReportComponent', () => {
  let component: StarReportComponent;
  let fixture: ComponentFixture<StarReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
