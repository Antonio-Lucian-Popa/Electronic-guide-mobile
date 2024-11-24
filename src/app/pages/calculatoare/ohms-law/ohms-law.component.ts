import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ohms-law',
  templateUrl: './ohms-law.component.html',
  styleUrls: ['./ohms-law.component.scss'],
})
export class OhmsLawComponent {

  current = 1; // Curentul (I) în amperi
  voltage = 5; // Tensiunea (V) în volți
  resistance = 5; // Rezistența (R) în ohmi
  power = 5; // Puterea (P) în wați

  selectedSeries = 'E24'; // Seria selectată
  nearestResistance = 5.1; // Valoarea apropiată în serie
  error = 2; // Eroare în procent

  constructor(
    private modalController: ModalController,
    private alertController: AlertController
  ) {}

  // Închide modalul curent
  async closeModal() {
    await this.modalController.dismiss();
  }

  // Deschide dialogul pentru introducerea unei valori
  async openInputDialog(parameter: string) {
    const alert = await this.alertController.create({
      header: `Insert the value of ${parameter}`,
      inputs: [
        {
          name: 'value',
          type: 'number',
          placeholder: `Enter ${parameter}`,
          value: this.getParameterValue(parameter),
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (data) => {
            this.setParameterValue(parameter, +data.value);
            this.calculatePower(); // Recalculăm puterea
          },
        },
      ],
    });

    await alert.present();
  }

  // Obține valoarea curentă a parametrului
  getParameterValue(parameter: string): number {
    switch (parameter) {
      case 'I':
        return parseFloat(this.current.toFixed(2)); // Formatează cu 2 zecimale
      case 'V':
        return parseFloat(this.voltage.toFixed(2)); // Formatează cu 2 zecimale
      case 'R':
        return parseFloat(this.resistance.toFixed(2)); // Formatează cu 2 zecimale
      default:
        return 0;
    }
  }

  // Setează valoarea parametrului
  setParameterValue(parameter: string, value: number) {
    switch (parameter) {
      case 'I':
        this.current = value;
        break;
      case 'V':
        this.voltage = value;
        break;
      case 'R':
        this.resistance = value;
        break;
    }
  }

  // Recalculăm puterea conform legii lui Ohm
  calculatePower() {
    if (this.current && this.voltage) {
      this.power = this.voltage * this.current;
    } else if (this.voltage && this.resistance) {
      this.power = (this.voltage ** 2) / this.resistance;
    } else if (this.current && this.resistance) {
      this.power = this.current ** 2 * this.resistance;
    }
  }

  // Actualizarea seriei de rezistențe și calcularea valorii apropiate
  onSeriesChange(event: any) {
    this.selectedSeries = event.detail.value;
    const resistanceValues = this.getSeriesValues(this.selectedSeries);
    const closest = this.findClosestResistance(this.resistance, resistanceValues);
    this.nearestResistance = closest.value;
    this.error = closest.error;
  }

  // Setează rezistența cea mai apropiată și recalibrează întreaga schemă
  setNearestResistanceValue() {
    this.resistance = this.nearestResistance;

    // Recalculăm curentul, tensiunea și puterea conform noii rezistențe
    if (this.voltage && this.resistance) {
      this.current = this.voltage / this.resistance; // Ohm's Law: I = V / R
      this.power = this.voltage * this.current; // Power: P = V * I
    } else if (this.current && this.resistance) {
      this.voltage = this.current * this.resistance; // Ohm's Law: V = I * R
      this.power = this.current ** 2 * this.resistance; // Power: P = I^2 * R
    } else if (this.voltage && this.current) {
      this.resistance = this.voltage / this.current; // Ohm's Law: R = V / I
      this.power = this.voltage * this.current; // Power: P = V * I
    }
  }

  // Obține valorile dintr-o serie specifică
  getSeriesValues(series: string): number[] {
    const seriesMap: { [key: string]: number[] } = {
      E12: [1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2],
      E24: [1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1],
      E48: [1.00, 1.05, 1.10, 1.15, 1.21, 1.27, 1.33, 1.40, 1.47, 1.54, 1.62, 1.69, 1.78, 1.87, 1.96, 2.05, 2.15, 2.26, 2.37, 2.49, 2.61, 2.74, 2.87, 3.01, 3.16, 3.32, 3.48, 3.65, 3.83, 4.02, 4.22, 4.42, 4.64, 4.87, 5.11, 5.36, 5.62, 5.90, 6.19, 6.49, 6.81, 7.15, 7.50, 7.87, 8.25, 8.66, 9.09, 9.53],
    };

    return seriesMap[series] || [];
  }

  // Găsește valoarea cea mai apropiată și eroarea
  findClosestResistance(target: number, series: number[]): { value: number; error: number } {
    let closestValue = series[0];
    let minError = Math.abs((target - closestValue) / target) * 100;

    for (const value of series) {
      const error = Math.abs((target - value) / target) * 100;
      if (error < minError) {
        closestValue = value;
        minError = error;
      }
    }

    return { value: closestValue, error: Math.round(minError) };
  }
}
