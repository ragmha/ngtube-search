import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutbeSearchComponent } from './youtbe-search.component';

describe('YoutbeSearchComponent', () => {
  let component: YoutbeSearchComponent;
  let fixture: ComponentFixture<YoutbeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutbeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutbeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
