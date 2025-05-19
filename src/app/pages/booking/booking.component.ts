import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
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
import { DatumKiemelesPipe } from '../../pipes/datum-kiemeles-pipe';
import { FoglalasService } from '../../services/foglalas.service';
import { Observable } from 'rxjs';

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
    StilusPipe,
  ],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  foglalasok$!: Observable<Foglalas[]>;
  private foglalasService = inject(FoglalasService);
  private fb = inject(FormBuilder);

  form = this.fb.group({
    nev: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    datum: ['', Validators.required],
    stilus: ['', Validators.required],
    ido: ['', Validators.required],
    tetovaloId: ['', Validators.required]
  });

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

  ngOnInit(): void {
    this.foglalasok$ = this.foglalasService.getFoglalasok();
  }

  foglalasTorles(id: string) {
    this.foglalasService.deleteFoglalas(id);
  }

  onSubmit() {
    console.log('onSubmit meghívva!');
    if (this.form.invalid) return;
    const ujFoglalas: Omit<Foglalas, 'id'> = {
      vendegNev: this.form.value.nev!,
      datum: new Date(this.form.value.datum!).toISOString().split('T')[0],
      ido: this.form.value.ido!,
      tetovaloId: parseInt(this.form.value.tetovaloId!)
    };

    this.foglalasService.addFoglalas(ujFoglalas)
      .then(() => this.form.reset())
      .catch(err => console.error('Hiba mentés közben:', err));
  }
}
