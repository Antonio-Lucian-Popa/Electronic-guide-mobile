import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-usb-port',
  templateUrl: './usb-port.component.html',
  styleUrls: ['./usb-port.component.scss'],
})
export class UsbPortComponent {

  usb2Pins = [
    { pin: 1, name: 'VCC', description: '+5 V', color: 'Red' },
    { pin: 2, name: 'D-', description: 'Data -', color: 'White' },
    { pin: 3, name: 'D+', description: 'Data +', color: 'Green' },
    { pin: 4, name: 'GND', description: 'Ground', color: 'Black' },
  ];

  usb3Pins = [
    { pin: 1, typeA: 'Vbus', typeB: 'Vbus', signal: 'Power', description: 'USB Power', color: 'Red' },
    { pin: 2, typeA: 'D-', typeB: 'D-', signal: 'Data -', description: 'USB 2.0 Data -', color: 'White' },
    { pin: 3, typeA: 'D+', typeB: 'D+', signal: 'Data +', description: 'USB 2.0 Data +', color: 'Green' },
    { pin: 4, typeA: 'GND', typeB: 'GND', signal: 'Ground', description: 'Ground for Power', color: 'Black' },
    { pin: 5, typeA: 'SSTX+', typeB: 'SSTX+', signal: 'Transmit +', description: 'SuperSpeed Transmit +', color: 'Orange' },
    { pin: 6, typeA: 'SSTX-', typeB: 'SSTX-', signal: 'Transmit -', description: 'SuperSpeed Transmit -', color: 'Purple' },
  ];

  usbTypeCPins = [
    { pin: 'A1/B12', signal: 'GND', description: 'Ground' },
    { pin: 'A2/B11', signal: 'TX+', description: 'SuperSpeed Transmit +' },
    { pin: 'A3/B10', signal: 'TX-', description: 'SuperSpeed Transmit -' },
    { pin: 'A4/B9', signal: 'Vbus', description: 'USB Power' },
    { pin: 'A5/B8', signal: 'CC', description: 'Configuration Channel' },
    { pin: 'A6/B7', signal: 'D+', description: 'USB 2.0 Data +' },
    { pin: 'A7/B6', signal: 'D-', description: 'USB 2.0 Data -' },
  ];

  constructor(private modalController: ModalController) {}

  async closeModal() {
    await this.modalController.dismiss();
  }
}
