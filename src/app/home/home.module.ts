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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CalculatoareComponent, ResistorColorCodeComponent, OhmsLawComponent, InductorColorCodeComponent]
})
export class HomePageModule {}
