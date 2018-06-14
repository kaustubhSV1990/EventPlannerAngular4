import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCreateUpdateComponent } from './activity-create-update.component';

describe('ActivityCreateUpdateComponent', () => {
  let component: ActivityCreateUpdateComponent;
  let fixture: ComponentFixture<ActivityCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
