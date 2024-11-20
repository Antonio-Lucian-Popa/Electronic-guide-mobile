import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-parallel-port',
  templateUrl: './parallel-port.component.html',
  styleUrls: ['./parallel-port.component.scss'],
})
export class ParallelPortComponent {

  parallelPortPins = [
    { pin: 1, signal: 'STROBE', description: 'Strobe Signal', direction: 'Output', color: 'Red' },
    { pin: 2, signal: 'D0', description: 'Data Bit 0', direction: 'Output', color: 'Green' },
    { pin: 3, signal: 'D1', description: 'Data Bit 1', direction: 'Output', color: 'Blue' },
    { pin: 4, signal: 'D2', description: 'Data Bit 2', direction: 'Output', color: 'Yellow' },
    { pin: 5, signal: 'D3', description: 'Data Bit 3', direction: 'Output', color: 'Orange' },
    { pin: 6, signal: 'D4', description: 'Data Bit 4', direction: 'Output', color: 'Purple' },
    { pin: 7, signal: 'D5', description: 'Data Bit 5', direction: 'Output', color: 'Pink' },
    { pin: 8, signal: 'D6', description: 'Data Bit 6', direction: 'Output', color: 'Cyan' },
    { pin: 9, signal: 'D7', description: 'Data Bit 7', direction: 'Output', color: 'Magenta' },
    { pin: 10, signal: 'ACK', description: 'Acknowledge', direction: 'Input', color: 'Brown' },
    { pin: 11, signal: 'BUSY', description: 'Busy Signal', direction: 'Input', color: 'Gray' },
    { pin: 12, signal: 'PE', description: 'Paper End', direction: 'Input', color: 'Black' },
    { pin: 13, signal: 'SELECT', description: 'Printer Select', direction: 'Input', color: 'White' },
    { pin: 14, signal: 'AUTOFD', description: 'Auto Feed', direction: 'Output', color: 'LightBlue' },
    { pin: 15, signal: 'ERROR', description: 'Printer Error', direction: 'Input', color: 'LightGreen' },
    { pin: 16, signal: 'INIT', description: 'Initialize Printer', direction: 'Output', color: 'LightYellow' },
    { pin: 17, signal: 'SLCTIN', description: 'Select In', direction: 'Output', color: 'LightGray' },
    { pin: 18, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
    { pin: 19, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
    { pin: 20, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
    { pin: 21, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
    { pin: 22, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
    { pin: 23, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
    { pin: 24, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
    { pin: 25, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
  ];

  constructor(private modalController: ModalController) {}

  async closeModal() {
    await this.modalController.dismiss();
  }

}
