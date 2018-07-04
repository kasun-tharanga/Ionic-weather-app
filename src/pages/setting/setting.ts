import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  city : string;
  state : string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  ionViewWillEnter(){
    this.storage.get("location").then(val => {
      if (val != null){
        let location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;
      }
      else {
        this.city = 'Miami';
        this.state = 'FL';
      }
    }); 
  }

  saveForm(){
    let location = {
      city: this.city,
      state: this.state
    };
    this.storage.set("location", JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }
}
