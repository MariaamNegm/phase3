import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifydetailsComponent } from './modifydetails.component';

describe('ModifydetailsComponent', () => {
  let component: ModifydetailsComponent;
  let fixture: ComponentFixture<ModifydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifydetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
