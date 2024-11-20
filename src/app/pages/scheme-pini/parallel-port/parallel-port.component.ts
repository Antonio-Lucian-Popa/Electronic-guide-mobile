import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-parallel-port',
  templateUrl: './parallel-port.component.html',
  styleUrls: ['./parallel-port.component.scss'],
})
export class ParallelPortComponent {

  parallelPortPins = [
    { pin25: 1, pin36: 1, signal: 'STROBE', description: 'Strobe Signal', direction: 'Output', color: 'Red' },
    { pin25: 2, pin36: 2, signal: 'D0', description: 'Data Bit 0', direction: 'Output', color: 'Green' },
    { pin25: 3, pin36: 3, signal: 'D1', description: 'Data Bit 1', direction: 'Output', color: 'Blue' },
    { pin25: 4, pin36: 4, signal: 'D2', description: 'Data Bit 2', direction: 'Output', color: 'Yellow' },
    { pin25: 5, pin36: 5, signal: 'D3', description: 'Data Bit 3', direction: 'Output', color: 'Orange' },
    { pin25: 6, pin36: 6, signal: 'D4', description: 'Data Bit 4', direction: 'Output', color: 'Purple' },
    { pin25: 7, pin36: 7, signal: 'D5', description: 'Data Bit 5', direction: 'Output', color: 'Pink' },
    { pin25: 8, pin36: 8, signal: 'D6', description: 'Data Bit 6', direction: 'Output', color: 'Cyan' },
    { pin25: 9, pin36: 9, signal: 'D7', description: 'Data Bit 7', direction: 'Output', color: 'Magenta' },
    { pin25: 10, pin36: 10, signal: 'ACK', description: 'Acknowledge', direction: 'Input', color: 'Brown' },
    { pin25: 11, pin36: 11, signal: 'BUSY', description: 'Busy Signal', direction: 'Input', color: 'Gray' },
    { pin25: 12, pin36: 12, signal: 'PE', description: 'Paper End', direction: 'Input', color: 'Black' },
    { pin25: 13, pin36: 13, signal: 'SELECT', description: 'Printer Select', direction: 'Input', color: 'White' },
    { pin25: 14, pin36: 14, signal: 'AUTOFD', description: 'Auto Feed', direction: 'Output', color: 'LightBlue' },
    { pin25: 15, pin36: 15, signal: 'ERROR', description: 'Printer Error', direction: 'Input', color: 'LightGreen' },
    { pin25: 16, pin36: 16, signal: 'INIT', description: 'Initialize Printer', direction: 'Output', color: 'LightYellow' },
    { pin25: 17, pin36: 17, signal: 'SLCTIN', description: 'Select In', direction: 'Output', color: 'LightGray' },
    { pin25: 18, pin36: 18, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
    { pin25: 19, pin36: 19, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
    { pin25: 20, pin36: 20, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
    { pin25: 21, pin36: 21, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
    { pin25: 22, pin36: 22, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
    { pin25: 23, pin36: 23, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
    { pin25: 24, pin36: 24, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
    { pin25: 25, pin36: 25, signal: 'GND', description: 'Ground', direction: 'N/A', color: 'Black' },
    { pin25: '-', pin36: 26, signal: 'NC', description: 'Not Connected', direction: 'N/A', color: 'LightGray' },
    { pin25: '-', pin36: 27, signal: 'NC', description: 'Not Connected', direction: 'N/A', color: 'LightGray' },
    { pin25: '-', pin36: 36, signal: 'Shield', description: 'Cable Shield', direction: 'N/A', color: 'Black' },
  ];

  constructor(private modalController: ModalController) {}

  async closeModal() {
    await this.modalController.dismiss();
  }

}
