import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Clipboard } from '@capacitor/clipboard';
import { all, create } from 'mathjs';

@Component({
  selector: 'app-custom-calculator',
  templateUrl: './custom-calculator.component.html',
  styleUrls: ['./custom-calculator.component.scss'],
})
export class CustomCalculatorComponent {
  @Input() calculator: any;
  result: any = 0;

  math = create(all); // Instanță math.js

  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }

  calculate() {
    try {
      const formula = this.calculator.formula;
  
      // Creează un obiect cu cheile și valorile parametrilor
      const paramValues = this.calculator.parameters.reduce((acc: any, param: any) => {
        acc[param.key] = Number(param.value); // Convertim valorile în numere
        return acc;
      }, {});
  
      // Evaluăm formula folosind math.js
      const compiledFormula = this.math.compile(formula);
      const result = compiledFormula.evaluate(paramValues);
  
      // Limităm numărul de zecimale (de exemplu, 4)
      this.result = this.math.format(result, { precision: 4 });
    } catch (error) {
      console.error('Error calculating result:', error);
      this.result = 'Error in formula';
    }
  }
  

  // Partajează calculatorul
  async shareCalculator() {
    const jsonData = encodeURIComponent(JSON.stringify(this.calculator));
    const httpLink = `myapp://create-calculator?data=${jsonData}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Custom Calculator',
          text: 'Check out this custom calculator!',
          url: httpLink,
        });
      } catch (error) {
        console.error('Share failed:', error);
      }
    } else {
      // Copiază linkul în clipboard
      await Clipboard.write({
        string: httpLink,
      });
      alert('Link copied to clipboard!');
    }
  }
}
