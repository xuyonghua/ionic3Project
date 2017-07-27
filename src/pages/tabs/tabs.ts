import {Component} from '@angular/core';

import {SettingPage} from '../setting/setting';
import {HomePage} from '../home/home';
import {NewsPage} from "../news/news";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewsPage;
  tab3Root = SettingPage;

  constructor() {

  }
}
