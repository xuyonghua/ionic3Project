import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting-detail',
  templateUrl: 'setting-detail.html',
})
export class SettingDetailPage {
  detail:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detail = navParams.get("text");
  }

  ionViewDidLoad() {

  }

}
