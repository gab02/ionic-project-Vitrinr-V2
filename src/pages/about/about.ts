import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  

  constructor(public navCtrl: NavController) {
    
  }  
  

  open(){
    this.navCtrl.push(ContactPage, {}, {animate: true} );    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
   
 }
