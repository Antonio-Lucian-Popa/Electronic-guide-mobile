import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-calculator',
  templateUrl: './create-calculator.component.html',
  styleUrls: ['./create-calculator.component.scss'],
})
export class CreateCalculatorComponent  {

  calculator: any = {
    title: '',
    parameters: [],
    formula: '',
  };

  constructor(private modalController: ModalController) {}

  // Închide modalul
  closeModal() {
    this.modalController.dismiss();
  }

  // Adaugă un parametru nou
  addParameter() {
    this.calculator.parameters.push({
      name: '',
      key: '',
      defaultValue: '',
    });
  }

  // Elimină un parametru
  removeParameter(index: number) {
    this.calculator.parameters.splice(index, 1);
  }

  // Salvează calculatorul și trimite datele
  saveCalculator() {
    if (!this.calculator.title) {
      alert('Please provide a title for the calculator.');
      return;
    }
    if (!this.calculator.formula) {
      alert('Please provide a formula for the calculator.');
      return;
    }

    // Validăm dacă fiecare parametru are un nume și o cheie
    for (const param of this.calculator.parameters) {
      if (!param.name || !param.key) {
        alert('Each parameter must have a name and a key.');
        return;
      }
    }

    this.modalController.dismiss(this.calculator);
  }
}
