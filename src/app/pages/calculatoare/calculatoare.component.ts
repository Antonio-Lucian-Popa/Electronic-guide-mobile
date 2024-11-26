import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResistorColorCodeComponent } from './resistor-color-code/resistor-color-code.component';
import { OhmsLawComponent } from './ohms-law/ohms-law.component';
import { InductorColorCodeComponent } from './inductor-color-code/inductor-color-code.component';
import { CustomCalculatorComponent } from './custom-calculator/custom-calculator.component';
import { CreateCalculatorComponent } from './create-calculator/create-calculator.component';

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

   customCalculators: any[] = []; // Lista calculatoarelor personalizate

  constructor(private modalController: ModalController) {}

  async openModal(component: any) {
    const modal = await this.modalController.create({
      component: component,
      cssClass: 'custom-modal-class', // Stil personalizat (opțional)
    });
    await modal.present();
  }

  // Deschide modal pentru calculatoare personalizate
  async openCustomCalculator(calculator: any) {
    const modal = await this.modalController.create({
      component: CustomCalculatorComponent,
      componentProps: { calculator },
      cssClass: 'custom-modal-class',
    });
    await modal.present();
  }

  // Deschide modal pentru crearea unui calculator nou
  async openCreateCalculatorModal() {
    const modal = await this.modalController.create({
      component: CreateCalculatorComponent,
      cssClass: 'custom-modal-class',
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.customCalculators.push(result.data);
      }
    });

    await modal.present();
  }

  // // Partajează un calculator personalizat
  // async shareCalculator(calculator: any) {
  //   const jsonData = encodeURIComponent(JSON.stringify(calculator));
  //   const shareableLink = `electrodoc://create-calculator?data=${jsonData}`;

  //   await Clipboard.write({
  //     string: shareableLink,
  //   });

  //   alert('Link copied to clipboard!');
  // }

}
