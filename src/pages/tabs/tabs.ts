import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ChartPage } from '../chart/chart';
import { SemakibadahPage } from '../semakibadah/semakibadah';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SemakibadahPage;
  tab2Root = AboutPage;
  tab3Root = ChartPage;
  tab4Root = ContactPage;
  tab5Root = HomePage;

  constructor() {

  }
}
