import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderaComponent } from './headera.component';

describe('HeaderaComponent', () => {
  let component: HeaderaComponent;
  let fixture: ComponentFixture<HeaderaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
