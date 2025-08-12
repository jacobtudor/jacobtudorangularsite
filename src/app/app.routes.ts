import { HomeComponent } from './pages/home/home.component';    
import { EdulifeComponent } from './pages/edulife/edulife.component';    

import { Routes } from '@angular/router';

export const routes: Routes = [
      { path: '', component: HomeComponent },  
      { path: 'EduLife', component: EdulifeComponent },  
];
