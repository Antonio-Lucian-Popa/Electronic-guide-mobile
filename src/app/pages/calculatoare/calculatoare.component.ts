import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResistorColorCodeComponent } from './resistor-color-code/resistor-color-code.component';
import { OhmsLawComponent } from './ohms-law/ohms-law.component';
import { InductorColorCodeComponent } from './inductor-color-code/inductor-color-code.component';

@Component({
  selector: 'app-calculatoare',
  templateUrl: './calculatoare.component.html',
  styleUrls: ['./calculatoare.component.scss'],
})
export class CalculatoareComponent {

   // Expune componentele către HTML
   ResistorColorCodeComponent = ResistorColorCodeComponent;
   OhmsLawComponent = OhmsLawComponent;
   InductorColorCodeComponent = InductorColorCodeComponent;

  constructor(private modalController: ModalController) {}

  async openModal(component: any) {
    const modal = await this.modalController.create({
      component: component,
      cssClass: 'custom-modal-class', // Stil personalizat (opțional)
    });
    await modal.present();
  }

}
