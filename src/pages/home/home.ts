import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  img_data: any = [];

  constructor(public navCtrl: NavController, public httpService: HttpServiceProvider) {
    this.loadData();
  }

  ionViewWillEnter() {

  }

  loadData() {
    let random = Math.random();
    let result = Math.trunc(random * 50 - 20);

    let randomNum = Math.abs(result);
    this.httpService.getItems("http://gank.io/api/data/%E7%A6%8F%E5%88%A9/15/" + randomNum, (res) => {
      if (!res.error) {
        this.img_data = res.results;
      }
    })
  }

  doRefresh(refresher) {
    this.loadData();
    setTimeout(() => {
      refresher.complete();
    }, 2000);

  }

}
