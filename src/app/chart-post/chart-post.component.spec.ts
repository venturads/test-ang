import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPostComponent } from './chart-post.component';

describe('ChartPostComponent', () => {
  let component: ChartPostComponent;
  let fixture: ComponentFixture<ChartPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
