import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiberiaUiComponent } from './siberia-ui.component';

describe('SiberiaUiComponent', () => {
  let component: SiberiaUiComponent;
  let fixture: ComponentFixture<SiberiaUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiberiaUiComponent]
    });
    fixture = TestBed.createComponent(SiberiaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
