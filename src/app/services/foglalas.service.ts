import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, deleteDoc, doc, updateDoc, CollectionReference, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Foglalas } from '../models/foglalas.model';

@Injectable({
  providedIn: 'root'
})
export class FoglalasService {
  private foglalasGyujtemeny!: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.foglalasGyujtemeny = collection(this.firestore, 'foglalasok');
  }

  getFoglalasok(): Observable<Foglalas[]> {
    return collectionData(this.foglalasGyujtemeny, { idField: 'id' }) as Observable<Foglalas[]>;
  }

  addFoglalas(foglalas: Omit<Foglalas, 'id'>) {
    return addDoc(this.foglalasGyujtemeny, foglalas);
  }

  deleteFoglalas(id: string) {
    const foglalasDoc = doc(this.firestore, `foglalasok/${id}`);
    return deleteDoc(foglalasDoc);
  }

  updateFoglalas(id: string, ujAdatok: Partial<Foglalas>) {
    const foglalasDoc = doc(this.firestore, `foglalasok/${id}`);
    return updateDoc(foglalasDoc, ujAdatok);
  }
}
