import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconRegistry} from '@angular/material/icon'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatDividerModule
  ],
  exports: [
    MatSliderModule,
    MatDividerModule
  ]
})
export class MaterialModule { 
  constructor(private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
