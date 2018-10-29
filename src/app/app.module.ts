import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MovimientoPage } from '../pages/movimiento/movimiento';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TransaccionPage } from '../pages/transaccion/transaccion';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalendarModule } from 'ionic3-calendar-en';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from './credenciales';
import { ModelosProvider } from '../providers/modelos/modelos';

import { ModelosPage } from '../pages/modelos/modelos';
import { HttpClientModule,HttpClient } from '@angular/common/http'; 
import { ColoresPage } from '../pages/colores/colores';
import { CalendarioPage } from '../pages/calendario/calendario';
import { EditalocalPage } from '../pages/editalocal/editalocal';
import { EditacolorPage } from '../pages/editacolor/editacolor';
import { EditamodeloPage } from '../pages/editamodelo/editamodelo';
import { AgregamodeloPage } from '../pages/agregamodelo/agregamodelo';
import { EdittransaccionPage } from '../pages/edittransaccion/edittransaccion';
import { AgregatipomovimientoPage } from '../pages/agregatipomovimiento/agregatipomovimiento';
import { AgregacolorPage } from '../pages/agregacolor/agregacolor';
import { Http, RequestOptions, HttpModule } from '@angular/http';

import { TipomovimientoPage } from '../pages/tipomovimiento/tipomovimiento';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TransaccionPage,
    MovimientoPage,
    ConfiguracionPage,
    ModelosPage,
    ColoresPage,
    AgregamodeloPage,
    AgregacolorPage,
    AgregatipomovimientoPage,
    TipomovimientoPage,
    EditalocalPage,
    EditacolorPage,
    EditamodeloPage,
    EdittransaccionPage,
    CalendarioPage
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    EdittransaccionPage,
    HomePage,
    TabsPage,
    TransaccionPage,
    MovimientoPage,
    ConfiguracionPage,
    ModelosPage,
    ColoresPage,
    AgregamodeloPage,
    AgregacolorPage,
    AgregatipomovimientoPage,
    TipomovimientoPage,
    EditalocalPage,
    CalendarioPage,
    EditacolorPage,
    EditamodeloPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ModelosProvider
  ]
})
export class AppModule {}
