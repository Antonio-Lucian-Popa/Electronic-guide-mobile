import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResistorColorCodeComponent } from './resistor-color-code/resistor-color-code.component';
import { OhmsLawComponent } from './ohms-law/ohms-law.component';
import { InductorColorCodeComponent } from './inductor-color-code/inductor-color-code.component';
import { CustomCalculatorComponent } from './custom-calculator/custom-calculator.component';
import { CreateCalculatorComponent } from './create-calculator/create-calculator.component';
import { Storage } from '@ionic/storage-angular';
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

   pastedLink: string = ''; // Linkul lipit de utilizator

   constructor(
     private modalController: ModalController,
     private storage: Storage,
     private router: Router
   ) {
   // Preia datele din state (dacă există)
   const navigation = this.router.getCurrentNavigation();
   const state = navigation?.extras.state;

   if (state?.['customCalculator']) {
     // Adaugă calculatorul primit în lista locală
     this.customCalculators.push(state['customCalculator']);
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

   // Salvează calculatoarele local
  saveCalculatorsToStorage() {
    localStorage.setItem('customCalculators', JSON.stringify(this.customCalculators));
  }

 // Importă calculatorul din linkul lipit
 importCalculator() {
  if (!this.pastedLink?.trim()) {
    alert('Please paste a valid link.');
    return;
  }

  try {
    const link = this.pastedLink.trim();

    // Verifică dacă linkul începe cu schema corectă
    if (!link.startsWith('myapp://create-calculator')) {
      alert('Invalid link. Please check the URL format.');
      return;
    }

    // Obține partea cu parametrii
    const queryString = link.split('?')[1];
    const params = new URLSearchParams(queryString);

    // Extrage datele calculatorului
    const dataParam = params.get('data');
    if (!dataParam) {
      alert('No data found in the link.');
      return;
    }

    // Decodifică și validează datele calculatorului
    const calculatorData = JSON.parse(decodeURIComponent(dataParam));
    if (!calculatorData.title || !calculatorData.parameters || !calculatorData.formula) {
      alert('Invalid calculator data. Please ensure the link is correct.');
      return;
    }

    // Verifică duplicatele
    const existingCalculator = this.customCalculators.find(
      (calc) => calc.title === calculatorData.title
    );
    if (existingCalculator) {
      alert('A calculator with the same title already exists.');
      return;
    }

    // Adaugă calculatorul la lista personalizată
    this.customCalculators.push(calculatorData);

    // Salvează în localStorage/Ionic Storage
    this.saveCustomCalculators();

    // Notifică utilizatorul
    alert('Calculator imported and saved successfully!');
    this.pastedLink = ''; // Golește câmpul de input
  } catch (error) {
    alert('Failed to import calculator. Please check the link.');
    console.error('Error importing calculator:', error);
  }
}



}
