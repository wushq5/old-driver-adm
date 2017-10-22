import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MyMaterialModule } from './materialUI.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { UploadTeacherComponent } from './components/uploadTeacher/uploadTeacher.component';
import { UploadHomeworkComponent } from './components/uploadHomework/uploadHomework.component';
import { UpdateTeacherComponent } from './components/updateTeacher/updateTeacher.component';
 
import { CgiService } from './services/cgi.service';
import { SessionStorageService } from './services/session-storage.service';
import { LocationService } from './services/location.service';
import { AuthGuard } from './services/auth-guard.service';
import { MyHttpInterceptor } from './services/myHttpInterceptor';
import { CacheService } from './services/cache.service';
import { UtilsService } from './services/utils.service';

@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
    TeacherComponent,
    LoginComponent,
    UploadTeacherComponent,
    UpdateTeacherComponent,
    UploadHomeworkComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MyMaterialModule,
    FormsModule
  ],
  providers: [
    CgiService,
    LocationService,
    SessionStorageService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    },
    CacheService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
