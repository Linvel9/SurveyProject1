import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorComponentComponent } from './creator-component.component';

describe('CreatorComponentComponent', () => {
  let component: CreatorComponentComponent;
  let fixture: ComponentFixture<CreatorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
