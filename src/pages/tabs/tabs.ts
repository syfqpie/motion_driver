import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { LokasiPage } from '../lokasi/lokasi';
import { UtamaPage } from '../utama/utama';
//import { LoginPage } from '../login/login';
import { AktivitiPage } from '../aktiviti/aktiviti';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UtamaPage;
  tab2Root = AktivitiPage;
  tab3Root = LokasiPage;
  tab4Root = AboutPage;
  //tab5Root = LoginPage;

  constructor() {

  }
}
