import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';

declare var SpeechRecognition: any;
declare var platform: any;

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})

// Mobile Production: 393f04b304ee9c204abf9c5636504c3d
// Web Evaluation: 74eade34b5f36574701e3a15a5b3c91d


export class Page1 {

  recognition: any;
   constructor(public navCtrl: NavController, public platform: Platform) {
    
  }


  speechToText() {
    console.log("hello");
    alert("hello");
      this.platform.ready().then(() => {
        console.log("platform ready");
          this.recognition = new SpeechRecognition(); 
          this.recognition.lang = 'en-US';
          this.recognition.onnomatch = (event => {
              console.log('No match found.');
          });
          this.recognition.onerror = (event => {
              console.log('Error happens.');
          });
          this.recognition.onresult = (event => {
              if (event.results.length > 0) {
                  console.log('Output STT: ', event.results[0][0].transcript);            
              }
          });     
          this.recognition.start();
      });
  }

}
