import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicdetailsComponent } from './topicdetails.component';

describe('TopicdetailsComponent', () => {
  let component: TopicdetailsComponent;
  let fixture: ComponentFixture<TopicdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
