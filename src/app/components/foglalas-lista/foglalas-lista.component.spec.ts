import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoglalasListaComponent } from './foglalas-lista.component';

describe('FoglalasListaComponent', () => {
  let component: FoglalasListaComponent;
  let fixture: ComponentFixture<FoglalasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoglalasListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoglalasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
