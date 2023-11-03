import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInteractionComponent } from './input-interaction.component';

describe('InputInteractionComponent', () => {
  let component: InputInteractionComponent;
  let fixture: ComponentFixture<InputInteractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputInteractionComponent]
    });
    fixture = TestBed.createComponent(InputInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
