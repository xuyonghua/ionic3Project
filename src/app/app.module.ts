import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SettingPage } from '../pages/setting/setting';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule} from '@angular/http';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import {NewsPage} from "../pages/news/news";
import {BrowserPage} from "../pages/browser/browser";
import {CommonService} from "../providers/common-service";
import {SettingDetailPage} from "../pages/setting-detail/setting-detail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    SettingPage,
    NewsPage,
    BrowserPage,
    SettingDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    SettingPage,
    NewsPage,
    BrowserPage,
    SettingDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServiceProvider,
    CommonService
  ]
})
export class AppModule {}
