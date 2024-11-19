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
        return this.current;
      case 'V':
        return this.voltage;
      case 'R':
        return this.resistance;
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
    // Logica pentru calcularea celei mai apropiate valori din serie (simulare)
    this.nearestResistance = 5.1; // Exemplu
    this.error = 2; // Exemplu
  }
}
