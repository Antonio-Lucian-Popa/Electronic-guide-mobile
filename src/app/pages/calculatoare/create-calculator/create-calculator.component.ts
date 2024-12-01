import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { all, create } from 'mathjs';

@Component({
  selector: 'app-create-calculator',
  templateUrl: './create-calculator.component.html',
  styleUrls: ['./create-calculator.component.scss'],
})
export class CreateCalculatorComponent {

  calculator: any = {
    title: '',
    description: '',
    parameters: [],
    formula: '',
  };

  // Instanță math.js
  math = create(all);

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
    // Verifică dacă titlul calculatorului este completat
    if (!this.calculator.title || this.calculator.title.trim() === '') {
      alert('Please provide a title for the calculator.');
      return;
    }

    // Verifică dacă formula este completată
    if (!this.calculator.formula || this.calculator.formula.trim() === '') {
      alert('Please provide a formula for the calculator.');
      return;
    }

    // Validăm dacă fiecare parametru are un nume și o cheie
    for (const param of this.calculator.parameters) {
      if (!param.name || param.name.trim() === '') {
        alert('Each parameter must have a name.');
        return;
      }
      if (!param.key || param.key.trim() === '') {
        alert('Each parameter must have a key.');
        return;
      }
      // Verificăm dacă cheia parametrului este unică
      const duplicateKeys = this.calculator.parameters.filter((p: any) => p.key === param.key);
      if (duplicateKeys.length > 1) {
        alert(`Duplicate parameter key found: "${param.key}". Each key must be unique.`);
        return;
      }
    }

    // Lista funcțiilor disponibile în math.js
    const mathFunctions = Object.keys(this.math);

    // Extrage toate cheile din formula
    const formulaKeys = this.calculator.formula.match(/[a-zA-Z_]+/g) || [];

    // Verificăm dacă există chei necunoscute care nu sunt parametri sau funcții math.js
    const missingKeys = formulaKeys.filter(
      (key: any) =>
        !this.calculator.parameters.some((param: any) => param.key === key) &&
        !mathFunctions.includes(key)
    );

    if (missingKeys.length > 0) {
      alert(`The formula contains undefined keys or invalid functions: ${missingKeys.join(', ')}.`);
      return;
    }

    // Dacă toate validările sunt trecute, trimitem calculatorul către modal
    this.modalController.dismiss(this.calculator);
  }
}
