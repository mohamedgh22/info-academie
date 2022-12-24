import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './section/header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { OffreComponent } from './pages/offre/offre.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { PopupComponent } from './supp/popup/popup.component';
import { ServiceComponent } from './pages/service/service.component';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HeaderaComponent } from './pagesa/headera/headera.component';
import { AppearDirective } from './directives/appear.directive';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    ActivityComponent,
    OffreComponent,
    AproposComponent,
    PopupComponent,
    ServiceComponent,
    HeaderaComponent,
    AppearDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader:{
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


