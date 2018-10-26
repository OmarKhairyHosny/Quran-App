import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { QuranListComponent } from './Quran-list/Quran-list.component';
import { QuranAppServiceService } from 'Services/QuranApp-Service.service';
import { AyatSouraComponent } from './Ayat-Soura/Ayat-Soura.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: '', component: QuranListComponent },

  { path: 'ayat-soura/:index', component: AyatSouraComponent },
  { path: 'quran-list', component: QuranListComponent },

  
];

@NgModule({
   declarations: [
      AppComponent,
      QuranListComponent,
      AyatSouraComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } 
      )
   ],
   providers: [
      QuranAppServiceService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
