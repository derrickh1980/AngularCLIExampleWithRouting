import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';

export const AppRoutes: Routes = [
  {
    path: 'number/:id',
    component: NumberComponent
  }
];
