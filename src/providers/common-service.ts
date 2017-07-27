/**
 * Created by xyh on 2017/7/26.
 */
import {Loading, LoadingController, Platform, ToastController} from "ionic-angular";
import {Injectable} from "@angular/core";

@Injectable()
export class CommonService {
  private loading: Loading;

  constructor(private loadingCtrl: LoadingController,
              private platform: Platform,
              private toastCtrl: ToastController) {

  }


  /**
   * 统一调用此方法显示loading
   * @param content 显示的内容
   */
  showLoading(content: string = ''): void {
    this.loading = this.loadingCtrl.create({
      content: content
    });
    this.loading.present();

    setTimeout(() => {
      this.loading.dismissAll();
    }, 5000);
  };

  /**
   * 关闭loading
   */
  hideLoading(): void {
    if (this.loading) {
      this.loading.dismissAll()
    }
  };

  /**
   * 是否真机环境
   */
  isMobile(): boolean {
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }

  /**
   * 是否android真机环境
   */
  isAndroid(): boolean {
    return this.isMobile() && this.platform.is('android');
  }

  /**
   * 是否ios真机环境
   */
  isIos(): boolean {
    return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
  }

  /**
   * 统一调用此方法显示提示信息
   * @param message 信息内容
   * @param duration 显示时长
   */
  showToast(message: string = '操作完成', duration: number = 2000): void {
    this.toastCtrl.create({
      message: message,
      duration: duration,
      position: 'middle',
      showCloseButton: false
    }).present();
  };
}
