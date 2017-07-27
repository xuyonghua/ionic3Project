///<reference path="../../../node_modules/ionic-angular/navigation/nav-controller.d.ts"/>
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import {BrowserPage} from "../browser/browser";

/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  page: number = 0;
  jokeList: any = [];

  constructor(public navCtrl: NavController, public httpService: HttpServiceProvider) {
    this.loadData(this.page);
  }

  ionViewDidLoad() {

  }

  loadData(page) {
    if (page == 0) {
      this.jokeList = [];
    }

    this.httpService.getItems("nc/article/list/T1350383429665/" + page + "-10.html", (result) => {
      let arr = result.T1350383429665;
      for (var i = 0; i < arr.length; i++) {
        this.jokeList.push(arr[i]);
      }
    });
  }

  doRefresh(refresher) {
    this.page = 0;
    this.loadData(this.page);
    setTimeout(() => {
      refresher.complete();
    }, 2000);

  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.loadData(this.page);
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1000);
  }

  goNewsDetail(item) {
    this.navCtrl.push(BrowserPage, {
      browser: {
        title: item.title,
        url: item.url_3w
      }
    });
  }
}
