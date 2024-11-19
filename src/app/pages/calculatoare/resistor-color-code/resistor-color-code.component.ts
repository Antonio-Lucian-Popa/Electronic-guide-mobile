import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-resistor-color-code',
  templateUrl: './resistor-color-code.component.html',
  styleUrls: ['./resistor-color-code.component.scss'],
})
export class ResistorColorCodeComponent {

  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss(); // Închide modalul curent
  }

}
