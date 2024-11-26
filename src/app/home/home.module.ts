import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CalculatoareComponent } from '../pages/calculatoare/calculatoare.component';
import { ResistorColorCodeComponent } from '../pages/calculatoare/resistor-color-code/resistor-color-code.component';
import { OhmsLawComponent } from '../pages/calculatoare/ohms-law/ohms-law.component';
import { InductorColorCodeComponent } from '../pages/calculatoare/inductor-color-code/inductor-color-code.component';
import { SchemePiniComponent } from '../pages/scheme-pini/scheme-pini.component';
import { UsbPortComponent } from '../pages/scheme-pini/usb-port/usb-port.component';
import { ParallelPortComponent } from '../pages/scheme-pini/parallel-port/parallel-port.component';
import { SerialPortComponent } from '../pages/scheme-pini/serial-port/serial-port.component';
import { CreateCalculatorComponent } from '../pages/calculatoare/create-calculator/create-calculator.component';
import { CustomCalculatorComponent } from '../pages/calculatoare/custom-calculator/custom-calculator.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CalculatoareComponent, ResistorColorCodeComponent, OhmsLawComponent, InductorColorCodeComponent, SchemePiniComponent, UsbPortComponent, ParallelPortComponent, SerialPortComponent, CreateCalculatorComponent, CustomCalculatorComponent]
})
export class HomePageModule { }
