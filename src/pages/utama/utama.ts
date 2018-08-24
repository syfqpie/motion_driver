import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the UtamaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-utama',
  templateUrl: 'utama.html',
})
export class UtamaPage {
  user_name: any;
  user_phone: any;
  user_ic: any;
  user_pic: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UtamaPage');
    this.user_name = this.userProvider.name;
    this.user_phone = this.userProvider.phone;
    this.user_ic = this.userProvider.ic;
    this.user_pic = this.userProvider.pic;
  }

}
