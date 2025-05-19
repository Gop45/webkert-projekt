import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyAUPAshxosXM8j3sPOE8UCwwjAT0wbdxDE",
        authDomain: "webkert-tetovaloszalon.firebaseapp.com",
        projectId: "webkert-tetovaloszalon",
        storageBucket: "webkert-tetovaloszalon.firebasestorage.app",
        messagingSenderId: "524885958410",
        appId: "1:524885958410:web:f7d2fd925cb497004a24f3",
        measurementId: "G-Z6KLQKLF5Z"
      })
    ),
    provideFirestore(() => getFirestore())
  ]
};
