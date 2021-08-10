import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdesignersComponent } from './topdesigners.component';

describe('TopdesignersComponent', () => {
  let component: TopdesignersComponent;
  let fixture: ComponentFixture<TopdesignersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopdesignersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopdesignersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
