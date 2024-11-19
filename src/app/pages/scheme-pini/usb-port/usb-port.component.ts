import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-usb-port',
  templateUrl: './usb-port.component.html',
  styleUrls: ['./usb-port.component.scss'],
})
export class UsbPortComponent {

  usb2Pins = [
    { pin: 1, name: 'Vcc', description: 'Power (5V)' },
    { pin: 2, name: 'D-', description: 'Data -' },
    { pin: 3, name: 'D+', description: 'Data +' },
    { pin: 4, name: 'GND', description: 'Ground' },
  ];

  usb3Pins = [
    { pin: 1, name: 'Vcc', description: 'Power (5V)' },
    { pin: 2, name: 'D-', description: 'Data -' },
    { pin: 3, name: 'D+', description: 'Data +' },
    { pin: 4, name: 'GND', description: 'Ground' },
    { pin: 5, name: 'SSR-', description: 'SuperSpeed Receive -' },
    { pin: 6, name: 'SSR+', description: 'SuperSpeed Receive +' },
    { pin: 7, name: 'SST-', description: 'SuperSpeed Transmit -' },
    { pin: 8, name: 'SST+', description: 'SuperSpeed Transmit +' },
  ];

  usbTypeCPins = [
    { pin: 'A1/B1', name: 'GND', description: 'Ground' },
    { pin: 'A2/B2', name: 'TX+', description: 'SuperSpeed Transmit +' },
    { pin: 'A3/B3', name: 'TX-', description: 'SuperSpeed Transmit -' },
    { pin: 'A4/B4', name: 'Vcc', description: 'Power (5V)' },
    { pin: 'A5/B5', name: 'CC', description: 'Configuration Channel' },
    { pin: 'A6/B6', name: 'D+', description: 'USB 2.0 Data +' },
    { pin: 'A7/B7', name: 'D-', description: 'USB 2.0 Data -' },
    { pin: 'A8/B8', name: 'RX-', description: 'SuperSpeed Receive -' },
    { pin: 'A9/B9', name: 'RX+', description: 'SuperSpeed Receive +' },
  ];

  constructor(private modalController: ModalController) {}

  async closeModal() {
    await this.modalController.dismiss();
  }
}
