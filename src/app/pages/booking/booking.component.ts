import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Foglalas } from '../../models/foglalas.model';
import { Tetovalo } from '../../models/tetovalo.model';
import { Szalon } from '../../models/szalon.model';
import { Uzenet } from '../../models/uzenet.model';
import { FoglalasListaComponent } from "../../components/foglalas-lista/foglalas-lista.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { StilusPipe } from '../../pipes/stilus-pipe';



@Component({
  standalone: true,
  selector: 'app-booking',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FoglalasListaComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    StilusPipe
  ],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  foglalasok: Foglalas[] = [
    { id: 1, datum: '2025-04-15', ido: '10:00', vendegNev: 'Teszt Elek', tetovaloId: 1 },
    { id: 2, datum: '2025-04-16', ido: '14:00', vendegNev: 'Nagy Ádám', tetovaloId: 2 }
  ];
  
  tetovalok: Tetovalo[] = [
    { id: 1, nev: 'Kovács Béla', stilus: 'realisztikus', tapasztalatEv: 5 },
    { id: 2, nev: 'Nagy Anna', stilus: 'minimal', tapasztalatEv: 3 }
  ];

  szalonInfo: Szalon = {
    cim: '1234 Budapest, Minta utca 5.',
    nyitvatartas: 'H-P: 10-18',
    email: 'info@szalon.hu',
    telefonszam: '+36 30 123 4567'
  };

  utolsoUzenet: Uzenet = {
    nev: 'Teszt Elek',
    email: 'teszt@valami.hu',
    szoveg: 'Szia! Van szabad időpont?',
    datum: new Date()
  };


  foglalasTorles(id: number) {
    this.foglalasok = this.foglalasok.filter(f => f.id !== id);
  }
}


