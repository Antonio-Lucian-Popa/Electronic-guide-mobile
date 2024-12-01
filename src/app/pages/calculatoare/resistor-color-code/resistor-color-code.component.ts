import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-resistor-color-code',
  templateUrl: './resistor-color-code.component.html',
  styleUrls: ['./resistor-color-code.component.scss'],
})
export class ResistorColorCodeComponent {

   // Lista de culori disponibile
   colors = [
    { name: 'Black', value: 0, color: '#000000' },
    { name: 'Brown', value: 1, color: '#8B4513' },
    { name: 'Red', value: 2, color: '#FF0000' },
    { name: 'Orange', value: 3, color: '#FFA500' },
    { name: 'Yellow', value: 4, color: '#FFFF00' },
    { name: 'Green', value: 5, color: '#008000' },
    { name: 'Blue', value: 6, color: '#0000FF' },
    { name: 'Violet', value: 7, color: '#EE82EE' },
    { name: 'Gray', value: 8, color: '#808080' },
    { name: 'White', value: 9, color: '#FFFFFF' },
  ];

  multipliers = [
    { name: 'Black', value: 1, color: '#000000' },
    { name: 'Brown', value: 10, color: '#8B4513' },
    { name: 'Red', value: 100, color: '#FF0000' },
    { name: 'Orange', value: 1000, color: '#FFA500' },
    { name: 'Yellow', value: 10000, color: '#FFFF00' },
    { name: 'Green', value: 100000, color: '#008000' },
    { name: 'Blue', value: 1000000, color: '#0000FF' },
    { name: 'Gold', value: 0.1, color: '#FFD700' },
    { name: 'Silver', value: 0.01, color: '#C0C0C0' },
  ];

  tolerances = [
    { name: 'Brown', value: 1, color: '#8B4513' },
    { name: 'Red', value: 2, color: '#FF0000' },
    { name: 'Green', value: 0.5, color: '#008000' },
    { name: 'Blue', value: 0.25, color: '#0000FF' },
    { name: 'Violet', value: 0.1, color: '#EE82EE' },
    { name: 'Gray', value: 0.05, color: '#808080' },
    { name: 'Gold', value: 5, color: '#FFD700' },
    { name: 'Silver', value: 10, color: '#C0C0C0' },
  ];

  // Culorile benzilor
  band1Color = '#000000';
  band2Color = '#000000';
  band3Color = '#000000';
  band4Color = '#FFD700';

  // Valoarea rezistenței
  resistance: string = '0';
  tolerance: number = 5;

  constructor(private modalController: ModalController) {}

  // Metoda pentru a actualiza culoarea unei benzi
  updateBandColor(band: string, color: any) {
    if (band === 'band1') {
      this.band1Color = color.color;
    } else if (band === 'band2') {
      this.band2Color = color.color;
    } else if (band === 'band3') {
      this.band3Color = color.color;
    } else if (band === 'band4') {
      this.band4Color = color.color;
      this.tolerance = color.value;
    }

    this.calculateResistance();
  }

  // Calcularea valorii rezistenței
  calculateResistance() {
    const band1Value = this.colors.find((c) => c.color === this.band1Color)?.value ?? 0;
    const band2Value = this.colors.find((c) => c.color === this.band2Color)?.value ?? 0;
    const multiplierValue =
      this.multipliers.find((c) => c.color === this.band3Color)?.value ?? 1;

    const baseValue = band1Value * 10 + band2Value;
    this.resistance = (baseValue * multiplierValue).toExponential(2);
  }

  // Închide modalul curent
  async closeModal() {
    await this.modalController.dismiss();
  }


}
