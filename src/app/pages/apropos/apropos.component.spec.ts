import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposComponent } from './apropos.component';

describe('AproposComponent', () => {
  let component: AproposComponent;
  let fixture: ComponentFixture<AproposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AproposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
