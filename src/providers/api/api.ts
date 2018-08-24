import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  getInfos(){
    let headers = new HttpHeaders ({'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsImV4cCI6MTYzMzYyNjY4NCwiaWF0IjoxNTMzNjI2Njg0fQ.eyJwZXJtaXNzaW9uTGV2ZWwiOjAsImNvbXBhbnlJZCI6IjgzZWZkMmM1LTdiNWYtNGU2OC04OGQxLTZhOWEzZmEwMmJjOSIsImlkIjoiN2NmOTA1NTAtYzllNC00ODk1LTkyODQtZmUwOTcwMTQyZDI1IiwiZW1haWwiOiJhc3Jhcm90aG1hbkBtb3Rpb24uY29tLm15In0.9cjtc6YiT5EB1ozeUgD-YLi9aRp3aYNj3SwwISR1lqE'})
    return this.http.get('https://api.motion.com.my/v1/drivers/',{headers: headers});
  }


}
