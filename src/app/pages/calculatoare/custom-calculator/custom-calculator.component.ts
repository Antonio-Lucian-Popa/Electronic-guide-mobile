import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-custom-calculator',
  templateUrl: './custom-calculator.component.html',
  styleUrls: ['./custom-calculator.component.scss'],
})
export class CustomCalculatorComponent {

  @Input() calculator: any;
  result: number = 0;

  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }

  calculate() {
    try {
      const formula = this.calculator.formula;
      const values = this.calculator.parameters.reduce((acc: any, param: any) => {
        acc[param.key] = param.value;
        return acc;
      }, {});

      // Evaluăm formula cu parametrii
      this.result = new Function(
        ...Object.keys(values),
        `return ${formula};`
      )(...Object.values(values));
    } catch (error) {
      this.result = NaN;
      alert('Invalid formula!');
    }
  }

   // Partajează calculatorul
   async shareCalculator() {
    // Convertește calculatorul în JSON și encodează-l
    const calculatorData = encodeURIComponent(JSON.stringify(this.calculator));
    const shareableLink = `myapp://create-calculator?data=${calculatorData}`;

    // Copiază linkul în clipboard
    await Clipboard.write({
      string: shareableLink,
    });

    alert('Calculator link copied to clipboard! Share it with others.');
  }

}
