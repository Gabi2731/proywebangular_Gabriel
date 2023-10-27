import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagencentroComponent } from './imagencentro.component';

describe('ImagencentroComponent', () => {
  let component: ImagencentroComponent;
  let fixture: ComponentFixture<ImagencentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagencentroComponent]
    });
    fixture = TestBed.createComponent(ImagencentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
