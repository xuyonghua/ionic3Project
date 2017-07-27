import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(username, password) {
    if (username.value.length == 0) {
      alert("请输入账号");
    } else if (password.value.length == 0) {
      alert("请输入密码");
    } else {
      let userInfo: string = '用户名：' + username.value + '密码：' + password.value;
      console.log(userInfo);
      this.navCtrl.push(TabsPage);
    }
  }

}
