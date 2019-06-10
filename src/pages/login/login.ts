import { TabsPage } from './../tabs/tabs';
import { NavController } from 'ionic-angular';
import { Component} from '@angular/core';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    
  constructor(public navCtrl: NavController) {}

     open(){
      this.navCtrl.push(TabsPage, {}, {animate: true} );    
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }
    

  }
