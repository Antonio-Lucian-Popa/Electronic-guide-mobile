import { SerialPortComponent } from './serial-port/serial-port.component';
import { ParallelPortComponent } from './parallel-port/parallel-port.component';
import { UsbPortComponent } from './usb-port/usb-port.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-scheme-pini',
  templateUrl: './scheme-pini.component.html',
  styleUrls: ['./scheme-pini.component.scss'],
})
export class SchemePiniComponent {

  UsbPortComponent = UsbPortComponent;
  ParallelPortComponent = ParallelPortComponent;
  SerialPortComponent = SerialPortComponent;

  constructor(private modalController: ModalController) {}

  // Deschide un modal cu detalii despre port
  async openModal(component: any) {
    const modal = await this.modalController.create({
      component: component,
      cssClass: 'custom-modal-class', // Stil personalizat (opțional)
    });
    await modal.present();
  }
}
