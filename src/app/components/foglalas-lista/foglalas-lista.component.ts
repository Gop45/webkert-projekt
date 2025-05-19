import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, JsonPipe } from '@angular/common';
import { Foglalas } from '../../models/foglalas.model';
import { DatumKiemelesPipe } from '../../pipes/datum-kiemeles-pipe';
import { Tetovalo } from '../../models/tetovalo.model';

@Component({
  standalone: true,
  selector: 'app-foglalas-lista',
  templateUrl: './foglalas-lista.component.html',
  styleUrls: ['./foglalas-lista.component.scss'],
  imports: [
    NgFor,
    DatumKiemelesPipe
  ]
})
export class FoglalasListaComponent {
  @Input() foglalasok: Foglalas[] = [];
  @Input() tetovalok: Tetovalo[] = [];
  @Output() torles = new EventEmitter<string>();

  torlesInditas(id: string) {
    this.torles.emit(id);
  }

  getTetovaloNev(id: number): string {
    const t = this.tetovalok.find(t => t.id === id);
    return t ? `${t.nev} – ${t.stilus}` : 'Ismeretlen tetováló';
  }

}
