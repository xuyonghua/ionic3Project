import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SettingDetailPage} from "../setting-detail/setting-detail";

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  pageName: any;
  menuItems: any = [{'icon': 'ios-moon-outline', 'text': '夜间模式'},
    {'icon': 'ios-help-circle-outline', 'text': '客服中心'},
    {'icon': 'ios-download-outline', 'text': '应用更新'},
    {
      'icon': 'ios-create-outline',
      'text': '意见反馈'
    }];

  constructor(public navCtrl: NavController) {
    this.pageName = SettingDetailPage;
  }

  ionViewDidLoad() {

  }

  logout() {
    this.navCtrl.push(LoginPage);
  }

}
