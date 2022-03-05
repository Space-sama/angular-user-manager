import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClientInterfaceComponent } from './user-client-interface.component';

describe('UserClientInterfaceComponent', () => {
  let component: UserClientInterfaceComponent;
  let fixture: ComponentFixture<UserClientInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserClientInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserClientInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
