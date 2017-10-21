import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { UploadTeacherComponent } from './components/uploadTeacher/uploadTeacher.component';

import { AuthGuard } from './services/auth-guard.service';

// routes
const appRoutes: Routes = [
  {
    path: 'favourites',
    component: FavouritesComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'uploadTeacher', 
    component: UploadTeacherComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }