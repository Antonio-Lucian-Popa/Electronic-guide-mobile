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
    const jsonData = encodeURIComponent(JSON.stringify(this.calculator));
    const httpLink = `https://example.com/create-calculator?data=${jsonData}`;
  
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
