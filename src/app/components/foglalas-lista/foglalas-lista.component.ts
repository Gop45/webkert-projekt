import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, JsonPipe } from '@angular/common';
import { Foglalas } from '../../models/foglalas.model';

@Component({
  standalone: true,
  selector: 'app-foglalas-lista',
  templateUrl: './foglalas-lista.component.html',
  styleUrls: ['./foglalas-lista.component.scss'],
  imports: [NgFor]
})
export class FoglalasListaComponent {
  @Input() foglalasok: Foglalas[] = [];
  @Output() torles = new EventEmitter<number>();

  torlesInditas(id: number) {
    this.torles.emit(id);
  }
}
