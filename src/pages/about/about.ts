import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  info: Observable<any>;
  //datas: [];


  constructor(public navCtrl: NavController, public http: HttpClient, public apiProvider: ApiProvider) {
    this.info=this.apiProvider.getInfos();
    this.info
    .subscribe(data=> {
     this.info=data.data;
     console.log(this.info);
     var count = Object.keys(this.info).length;
     console.log(count);
     console.log(this.info[1].name)
     
      /*this.datas=JSON.parse(JSON.stringify(data));
      var count = Object.keys(this.datas).length;
      console.log(this.datas);*/

    })

  }

}
