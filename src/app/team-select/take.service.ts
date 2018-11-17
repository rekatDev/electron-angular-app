import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TakeService {

 fs = (<any>window).require('fs');
 mqtt = (<any>window).require('mqtt');

 constructor() {}

  saveFile() {
    this.fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
      console.log('Saved!');
    });
  }

  publishMessage() {
    const client = this.mqtt.connect('mqtt://localhost:1883');
    client.on('connect', () => {
      client.publish('hello/world', 'my message', function() {
        console.log('Message is published');
        client.end(); // Close the connection when published
      });
    });
  }
}
