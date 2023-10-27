import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrostrabajosComponent } from './nuestrostrabajos.component';

describe('NuestrostrabajosComponent', () => {
  let component: NuestrostrabajosComponent;
  let fixture: ComponentFixture<NuestrostrabajosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuestrostrabajosComponent]
    });
    fixture = TestBed.createComponent(NuestrostrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
