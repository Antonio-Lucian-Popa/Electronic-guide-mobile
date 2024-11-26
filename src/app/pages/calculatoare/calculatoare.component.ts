import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResistorColorCodeComponent } from './resistor-color-code/resistor-color-code.component';
import { OhmsLawComponent } from './ohms-law/ohms-law.component';
import { InductorColorCodeComponent } from './inductor-color-code/inductor-color-code.component';
import { CustomCalculatorComponent } from './custom-calculator/custom-calculator.component';
import { CreateCalculatorComponent } from './create-calculator/create-calculator.component';
import { Storage } from '@ionic/storage-angular';
import { Clipboard } from '@capacitor/clipboard';
import { Router } from '@angular/router';

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

   constructor(
     private modalController: ModalController,
     private storage: Storage,
     private router: Router
   ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['calculator']) {
      this.customCalculators.push(navigation.extras.state['calculator']);
    }
     this.initStorage(); // Inițializarea Storage
   }

   async initStorage() {
     await this.storage.create();
     this.loadCustomCalculators(); // Încarcă calculatoarele salvate
   }

   async loadCustomCalculators() {
     const savedCalculators = await this.storage.get('customCalculators');
     this.customCalculators = savedCalculators || [];
   }

   async saveCustomCalculators() {
     await this.storage.set('customCalculators', this.customCalculators);
   }

   async openModal(component: any) {
     const modal = await this.modalController.create({
       component: component,
       cssClass: 'custom-modal-class',
     });
     await modal.present();
   }

   // Deschide un calculator personalizat
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

     modal.onDidDismiss().then(async (result) => {
       if (result.data) {
         this.customCalculators.push(result.data);
         await this.saveCustomCalculators(); // Salvează în Storage
       }
     });

     await modal.present();
   }

   // Șterge un calculator personalizat
   async deleteCustomCalculator(index: number) {
     this.customCalculators.splice(index, 1);
     await this.saveCustomCalculators();
   }

   async shareCalculator(calculator: any) {
    // Codificăm calculatorul în JSON și îl includem în link
    const jsonData = encodeURIComponent(JSON.stringify(calculator));
    const shareableLink = `electronicguide://create-calculator?data=${jsonData}`;
  
    // Copiem link-ul în clipboard
    await Clipboard.write({
      string: shareableLink,
    });
  
    alert('Link copied to clipboard! Share it with your friends.');
  }
}
