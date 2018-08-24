import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  ic_num: string = "";
  tel_num: string = "";
  info: Observable <any>;
  public count: any;
  public index: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public apiProvider: ApiProvider, public alertCtrl: AlertController, public userProvider: UserProvider) {

    this.info=this.apiProvider.getInfos();
    this.info
    .subscribe(data=> {
      this.info=data.data;
      console.log(this.info);
      this.count = Object.keys(this.info).length;
      console.log(this.count);
    })
  }
  
  logMasuk(){

    let k=0;
    let found=false;
    for (k=0 ; k<=this.count-1; k++){
      if (this.ic_num == this.info[k].legalId && ('6' + this.tel_num) == this.info[k].phone){
        //
        console.log('Dah kot');
        found=true;
        this.index=k;
      }
    }
    if (found == true ){
      this.gotoUtamaPage(); //Go to TabsPage
    }
    else{
      let alert=this.alertCtrl.create({
        title: 'Ralat',
        subTitle: 'Maaf, kombinasi no. IC dan telefon anda tidak sepadan. Sila cuba sekali lagi',
        buttons: ['Tutup']
      });
      alert.present();
    }
  }

  gotoUtamaPage(){

    let infodata = {
      driver_name: this.info[this.index].name,
      driver_number: this.info[this.index].phone,
      driver_ic: this.info[this.index].legalId,
      driver_pic: this.info[this.index].primaryImageUrl
    };
    this.userProvider.getUserInfo(infodata);
    console.log('DONEEE!!');
    this.navCtrl.push(TabsPage, infodata);

  }



}
