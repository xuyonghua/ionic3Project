import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {CommonService} from "../common-service";

/*
 Generated class for the HttpServiceProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class HttpServiceProvider {

  constructor(public http: Http, public commonService: CommonService) {
    console.log('Hello HttpServiceProvider Provider');
  }

  getContents(url): Observable<Response> {
    return Observable.create(observer => {
      this.http.request(url).subscribe(res => {
        console.log(res);
        observer.next(res);
      }, err => {
        observer.error(err);
      });
    });
  }

  /**
   *
   * @param url
   * @param callback
   */
  getItems(url, callback) {
    //需要导入Headers,RequestOptions
    // let headers = new Headers({
    //   'Access-Control-Allow-Origin': '*'
    // });
    // let options = new RequestOptions({
    //   headers: headers
    // });
    console.log("isMobile:" + this.commonService.isMobile());
    if (this.commonService.isMobile()) {
      url = "http://c.m.163.com/" + url;
    }
    console.log("url:"+url);
    this.http.get(url)
      .map(res => res.json())
      .subscribe((result) =>
        callback(result)
      );
  }


}
