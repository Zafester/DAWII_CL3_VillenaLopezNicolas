import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaUnoComponent } from './pregunta-uno.component';

describe('PreguntaUnoComponent', () => {
  let component: PreguntaUnoComponent;
  let fixture: ComponentFixture<PreguntaUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntaUnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
