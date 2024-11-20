import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-serial-port',
  templateUrl: './serial-port.component.html',
  styleUrls: ['./serial-port.component.scss'],
})
export class SerialPortComponent {

  serialPortPins = [
    { pinDE9: 1, pinDB25: 8, signal: 'DCD', description: 'Data Carrier Detect', direction: 'Input' },
    { pinDE9: 2, pinDB25: 3, signal: 'RXD', description: 'Receive Data', direction: 'Input' },
    { pinDE9: 3, pinDB25: 2, signal: 'TXD', description: 'Transmit Data', direction: 'Output' },
    { pinDE9: 4, pinDB25: 20, signal: 'DTR', description: 'Data Terminal Ready', direction: 'Output' },
    { pinDE9: 5, pinDB25: 7, signal: 'GND', description: 'Ground', direction: 'N/A' },
    { pinDE9: 6, pinDB25: 6, signal: 'DSR', description: 'Data Set Ready', direction: 'Input' },
    { pinDE9: 7, pinDB25: 4, signal: 'RTS', description: 'Request To Send', direction: 'Output' },
    { pinDE9: 8, pinDB25: 5, signal: 'CTS', description: 'Clear To Send', direction: 'Input' },
    { pinDE9: 9, pinDB25: 22, signal: 'RI', description: 'Ring Indicator', direction: 'Input' },
  ];

  nullModemMapping = [
    { pinFrom: 2, pinTo: 3, signal: 'RXD -> TXD' },
    { pinFrom: 3, pinTo: 2, signal: 'TXD -> RXD' },
    { pinFrom: 4, pinTo: 6, signal: 'DTR -> DSR' },
    { pinFrom: 6, pinTo: 4, signal: 'DSR -> DTR' },
    { pinFrom: 7, pinTo: 8, signal: 'RTS -> CTS' },
    { pinFrom: 8, pinTo: 7, signal: 'CTS -> RTS' },
    { pinFrom: 5, pinTo: 5, signal: 'GND -> GND' },
  ];

  rj45Mapping = [
    { pinRj45: 1, pinDb9: 8, signal: 'CTS' },
    { pinRj45: 2, pinDb9: 6, signal: 'DSR' },
    { pinRj45: 3, pinDb9: 2, signal: 'RXD' },
    { pinRj45: 4, pinDb9: 5, signal: 'GND' },
    { pinRj45: 5, pinDb9: 5, signal: 'GND' },
    { pinRj45: 6, pinDb9: 3, signal: 'TXD' },
    { pinRj45: 7, pinDb9: 4, signal: 'DTR' },
    { pinRj45: 8, pinDb9: 7, signal: 'RTS' },
  ];


  constructor(private modalController: ModalController) {}

  async closeModal() {
    await this.modalController.dismiss();
  }

}
