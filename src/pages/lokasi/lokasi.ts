import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the LokasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lokasi',
  templateUrl: 'lokasi.html',
})
export class LokasiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private geo: Geolocation) {
  }

  lati: any;
  longi: any;
  laju: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad LokasiPage');
    this.geo.getCurrentPosition().then((resp)=> {
      this.lati=resp.coords.latitude;
      this.longi=resp.coords.longitude;
      this.laju=resp.coords.speed;
    }).catch((error)=> {
      console.log('Error getting location', error);
    });

    let watch=this.geo.watchPosition();
    watch.subscribe((data)=>{
      this.lati=data.coords.latitude;
      this.longi=data.coords.longitude;
      this.laju=data.coords.speed;
    });

  }

}
