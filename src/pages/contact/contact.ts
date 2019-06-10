
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 
  
 
 

  constructor(public navCtrl: NavController) {}
  public clickon(){
    var x = 1 
     if(x==1){
return  window.open('https://www.facebook.com/vitrine.cdb');
             }
     }
     open(){
      this.navCtrl.push(AboutPage, {}, {animate: true} );    
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad ContactPage');
    }
  
     }
 