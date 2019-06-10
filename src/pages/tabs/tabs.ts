import { LoginPage } from './../login/login';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html',
  selector: 'page-tabs'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = LoginPage;
 

  constructor(public navCtrl: NavController) { }
   open(){
      this.navCtrl.push(LoginPage, {}, {animate: true} );    
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad TabsPage');
    }
}

