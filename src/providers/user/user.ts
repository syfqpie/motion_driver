import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  public name: any;
  public phone: any;
  public ic: any;
  public pic: any;

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  getUserInfo(infos: any){
    this.name = infos.driver_name,
    this.phone = infos.driver_number,
    this.ic = infos.driver_ic,
    this.pic = infos.driver_pic
    console.log(this.name);  
    console.log('^Kalau keluar nama maknanya jadi');
  };

  loadUserInfo(){

  }

}
