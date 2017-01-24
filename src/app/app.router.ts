import { Routes } from '@angular/router';
import { Pages } from './pages/index';

export const routes: Routes = [
    { path: 'login',  component: Pages.HomeComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
